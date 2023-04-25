type pageProps = {
  params: { name: string };
};

export default function SingleRepoPage({ params: { name } }: pageProps) {
  return <div className="bg-gray-300 p-2 rounded-sm text-gray-800">{name}</div>;
}
