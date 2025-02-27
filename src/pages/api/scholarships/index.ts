import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const scholarships = await prisma.scholarship.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' }
        });
        return res.status(200).json(scholarships);
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching scholarships' });
      }

    case 'POST':
      // Only admins can create scholarships
      if (session.user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Forbidden' });
      }

      try {
        const scholarship = await prisma.scholarship.create({
          data: req.body
        });
        return res.status(201).json(scholarship);
      } catch (error) {
        return res.status(500).json({ message: 'Error creating scholarship' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}