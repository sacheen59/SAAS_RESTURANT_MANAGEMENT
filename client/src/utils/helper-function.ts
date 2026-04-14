export function generateSchemaName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, "_");
}

export function generateSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "") // allow numbers for slug
    .replace(/\s+/g, "-");
}

export function generateDomain(name: string) {
  return name.toLowerCase().trim().replaceAll(" ", "");
}

export function generateTenantUsername(name: string) {
  return "admin@" + name.toLowerCase().trim().replace(" ", "");
}

export function generateTenantPassword(name: string) {
  return name.toLowerCase().trim().replace(" ", "") + "@123";
}
