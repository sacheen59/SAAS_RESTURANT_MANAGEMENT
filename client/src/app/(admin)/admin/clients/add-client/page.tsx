"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Globe, IdCardLanyard, ShieldUser } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useEffect, useState } from "react";
import {
  generateDomain,
  generateSchemaName,
  generateSlug,
  generateTenantPassword,
  generateTenantUsername,
} from "@/utils/helper-function";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";
import { addTenantSchema } from "@/schema/admin/add-tenant";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { createTenant } from "@/store/admin/tenant/actions/tenant-action";
import { CreateTenantData } from "@/store/admin/tenant/tenant-slice";
import { AppDispatch } from "@/store";

type TenantData = InferType<typeof addTenantSchema>;

const AddClientPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TenantData>({
    resolver: yupResolver(addTenantSchema),
    defaultValues: {
      clientName: "",
      status: "active",
      schema: "",
      slug: "",
      domain: "",
      username: "",
      password: "",
      isPrimary: true,
    },
  });

  const clientName = watch("clientName");

  useEffect(() => {
    if (clientName) {
      setValue("schema", generateSchemaName(clientName));
      setValue("slug", generateSlug(clientName));
      setValue("domain", generateDomain(clientName));
      setValue("username", generateTenantUsername(clientName));
      setValue("password", generateTenantPassword(clientName));
    }
  }, [clientName, setValue]);

  const submitFormHandler = (data: CreateTenantData) => {
    console.log(data);
    dispatch(createTenant(data));
    reset();
  };

  function showPasswordHandler() {
    setShowPassword(true);
  }

  function hidePasswordHandler() {
    setShowPassword(false);
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/clients">Client</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin/clients/add-client">
                Add Client
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold ">Add new Client</h1>
          <p className="text-md text-[#64748B] tracking-wide">
            Provision a new Tenant within the DineOS ecosystem.
          </p>
        </div>
      </div>
      <form className="my-8" onSubmit={handleSubmit(submitFormHandler)}>
        {/* client details */}
        <Card className="my-4 py-6 px-6">
          <div className="flex gap-4 items-center">
            <div className="h-12.5 w-12.5 bg-[#E0E0FF] flex items-center justify-center rounded">
              <IdCardLanyard strokeWidth={1.5} size={30} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold leading-5">
                Client Details
              </h3>
              <p className="text-md text-[#64748B] tracking-wide">
                Primary identification and operational status for a new
                organization.
              </p>
            </div>
          </div>
          <div className="my-6">
            <div className="grid grid-cols-2 gap-15">
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  CLIENT NAME
                </FieldLabel>
                <Input
                  type="text"
                  placeholder="eg. Burger House"
                  {...register("clientName")}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.clientName?.message}</p>
                )}
              </Field>
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  STATUS
                </FieldLabel>
                <Select
                  defaultValue="active"
                  onValueChange={(val) => setValue("status", val)}
                >
                  <SelectTrigger className="h-12 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="trial">Trial</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-15 my-10">
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  SCHEMA NAME
                </FieldLabel>
                <Input
                  type="text"
                  placeholder="hotel_grand_plaza"
                  {...register("schema")}
                  readOnly
                />
              </Field>
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  SLUG
                </FieldLabel>
                <Input
                  type="text"
                  placeholder="hotel-grand-plaza"
                  {...register("slug")}
                  readOnly
                />
              </Field>
            </div>
          </div>
        </Card>
        <Card className="py-6 px-6">
          <div className="flex gap-4 items-center">
            <div className="h-12.5 w-12.5 bg-[#E0E0FF] flex items-center justify-center rounded">
              <Globe strokeWidth={1.5} size={30} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold leading-5">
                Domain Details
              </h3>
              <p className="text-md text-[#64748B] tracking-wide">
                Configure the public access endpoint for this client.
              </p>
            </div>
          </div>
          <div className="my-6">
            <div className="grid grid-cols-2 gap-15">
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  DOMAIN NAME
                </FieldLabel>
                <Input
                  type="text"
                  placeholder="eg. burgerhouse"
                  {...register("domain")}
                  readOnly
                />
              </Field>
              <div className="flex items-center space-x-2">
                <Switch
                  id="primaryDomain"
                  size="lg"
                  className="cursor-pointer"
                  defaultChecked
                  onCheckedChange={(val) => setValue("isPrimary", val)}
                />
                <FieldLabel
                  htmlFor="primaryDomain"
                  className="text-[#64748B] font-semibold tracking-wider ms-2"
                  {...register("isPrimary")}
                >
                  PRIMARY DOMAIN
                </FieldLabel>
              </div>
            </div>
          </div>
        </Card>
        <Card className="py-6 px-6 my-6">
          <div className="flex gap-4 items-center">
            <div className="h-12.5 w-12.5 bg-[#E0E0FF] flex items-center justify-center rounded">
              <ShieldUser strokeWidth={1.5} size={30} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold leading-5">
                Administrative Information
              </h3>
              <p className="text-md text-[#64748B] tracking-wide">
                Configure the public access endpoint for this client.
              </p>
            </div>
          </div>
          <div className="my-6">
            <div className="grid grid-cols-2 gap-15">
              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  USERNAME
                </FieldLabel>
                <Input
                  type="text"
                  placeholder="eg. burgerhouseadmin"
                  {...register("username")}
                  readOnly
                />
              </Field>

              <Field>
                <FieldLabel className="text-[#64748B] font-semibold tracking-wider ms-2">
                  PASSWORD
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    placeholder="Password"
                    readOnly
                    {...register("password")}
                    type={showPassword ? "text" : "Password"}
                  />
                  <InputGroupAddon align="inline-end">
                    {showPassword ? (
                      <Eye
                        className="size-6 cursor-pointer"
                        strokeWidth={1}
                        onClick={hidePasswordHandler}
                      />
                    ) : (
                      <EyeOff
                        className="size-6 cursor-pointer"
                        strokeWidth={1}
                        onClick={showPasswordHandler}
                      />
                    )}
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>
          </div>
        </Card>
        <div className="flex justify-end gap-6">
          <Button
            variant={"outline"}
            className="px-6 py-5 font-bold cursor-pointer"
          >
            Discard Changes
          </Button>
          <Button type="submit" className="px-6 py-5 font-bold cursor-pointer">
            Save Client
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddClientPage;
