import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request:NextRequest){
    const host = request.headers.get('host')
    const hostName = host?.split(':')[0]
    const parts = hostName?.split('.')

    const isSubDomain = parts!.length > 1 && parts![0] !== 'www'
    const subDomain = isSubDomain ? parts![0] : null

    const res = NextResponse.next()
    res.headers.set('x-Host', host || '')
    res.headers.set('x-Subdomain', subDomain || '')
    res.headers.set('x-is-tenant', isSubDomain ? 'true' : 'false')
    return res
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)']
}