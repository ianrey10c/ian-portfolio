import { AppButton } from "@/components/app/app-button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center">
      <p className="accent-word font-heading text-8xl font-semibold tracking-tight sm:text-9xl">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">This page doesn&apos;t exist.</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be broken or the page may have moved.
      </p>
      <AppButton href="/" className="mt-8">
        Back to home
      </AppButton>
    </section>
  );
}
