export default function SEOMeta() {
  return (
    <>
      <meta name='category' content='Internet Service Provider' />

      {/* DNS Prefetch para melhor performance */}
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//api.whatsapp.com' />
      <link rel='dns-prefetch' href='//wa.me' />
    </>
  );
}
