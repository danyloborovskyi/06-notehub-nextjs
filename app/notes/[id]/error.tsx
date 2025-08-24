'use client';

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return <p>Could not fetch note {error.message}</p>;
};

export default Error;
