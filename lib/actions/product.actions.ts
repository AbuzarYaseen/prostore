"use server";

import { LATEST_PRODUCTS_LIST } from "../constants";
import { PrismaClient } from "../generated/prisma";
import { convertPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIST,
    orderBy: { createdAt: "desc" },
  });
  return convertPlainObject(data);
}
console.log(process.env.DATABASE_URL);
