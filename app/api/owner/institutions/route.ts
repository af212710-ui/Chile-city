import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST: Crear Institución o Rol
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, name, institutionId, salary } = body;

    // Validación de seguridad aquí (Verificar si el usuario es Owner)

    if (action === 'CREATE_INSTITUTION') {
      const newInstitution = await prisma.institution.create({
        data: { name }
      });
      return NextResponse.json({ success: true, data: newInstitution });
    }

    if (action === 'CREATE_ROLE') {
      const newRole = await prisma.jobRole.create({
        data: {
          name,
          salary: parseFloat(salary),
          institutionId
        }
      });
      return NextResponse.json({ success: true, data: newRole });
    }

    return NextResponse.json({ error: "Acción no válida" }, { status: 400 });

  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
