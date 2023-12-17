import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  if (event.node.req.method === "GET") {
    const tasks = await prisma.task.findMany();

    return tasks;
  }
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const newTask = await prisma.task.create({
      data: {
        task: body.task,
        completed: false,
      },
    });
    console.log(newTask);
    return newTask;
  }
  if (event.node.req.method === "DELETE") {
    const body = await readBody(event);
    await prisma.task.delete({
      where: {
        id: body.id,
      },
    });
  }
  if (event.node.req.method === "PUT") {
    const body = await readBody(event);
    await prisma.task.update({
      where: { id: body.id },
      data: { task: body.task },
    });
  }
});
