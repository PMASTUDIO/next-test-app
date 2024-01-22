import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export async function PUT(req: NextRequest, props: Props) {
  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (props.params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
}

export async function DELETE(req: NextRequest, props: Props) {
  if (props.params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
