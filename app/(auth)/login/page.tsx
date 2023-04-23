import { SignIn } from "@clerk/nextjs/app-beta";

export default function Login() {
  return <SignIn signUpUrl="/register" />;
}
