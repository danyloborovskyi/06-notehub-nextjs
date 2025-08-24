import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import { fetchNoteById } from '../../../lib/noteService';
import NoteDetailsClient from './NoteDetailsClient';

type Props = {
  params: Promise<{ noteid: string }>;
};

export default async function NoteDetails({ params }: Props) {
  const { noteid } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', noteid],
    queryFn: () => fetchNoteById(noteid),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

// const NoteDetails = async ({ params }: Props) => {
//   const { id } = await params;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getSingleNote(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NoteDetailsClient />
//     </HydrationBoundary>
//   );
// };

// export default NoteDetails;
