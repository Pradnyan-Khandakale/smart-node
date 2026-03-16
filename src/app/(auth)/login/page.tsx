import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnauth();

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Page;

// https://localhost:3000/login
// use () to avoid the path
// https://localhost:3000/(auth)/login
