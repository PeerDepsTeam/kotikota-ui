import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {format} from "date-fns";
import Calendar from "react-calendar";
import {zodResolver} from "@hookform/resolvers/zod";
import {CalendarIcon} from "lucide-react";
import {GoogleAuthProvider} from "firebase/auth";
import {nanoid} from "nanoid";
import {Button} from "@/components/common/button.tsx";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn-ui/form.tsx";
import {Textarea} from "@/components/shadcn-ui/textarea.tsx";
import {StepperView, useStepperContext} from "@/components/common/stepper.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn-ui/popover.tsx";
import {Icons} from "@/components/common/icons.tsx";
import {Input} from "@/components/shadcn-ui/input.tsx";
import {
  EmailAndPassword,
  emailAndPasswordSchema,
  type Signup as User,
  signupSchema,
} from "@/features/auth/schema.ts";
import {RedirectAuthenticated, useAuthStore} from "@/features/auth";
import {
  AuthProvider,
  AuthWith,
  getCachedAuth,
  registerWith,
} from "@/services/security";
import {cn} from "@/lib/utils.ts";
import {useLoading, useToast} from "@/hooks";
import "react-calendar/dist/Calendar.css";
import {Card} from "@/components/shadcn-ui/card";

export const Signup: FC = () => {
  const authStore = useAuthStore();
  const navigate = useNavigate();
  const stepper = useStepperContext();
  const {queue, isLoading} = useLoading("signup");
  const toast = useToast();
  const stepNext = () => {
    stepper.nextStep();
  };

  const signup: AuthWith<void> = async (provider) => {
    try {
      await queue(() => registerWith(provider));
      stepNext();
    } catch (e) {
      toast({
        message: "Sign up failed",
      });
    }
  };

  const createUser: SubmitHandler<User> = async (user) => {
    try {
      const whoami = await queue(() =>
        AuthProvider.register({
          ...(user as any),
          id: nanoid(),
          entrance_datetime: new Date(),
        })
      );
      authStore.setUser(whoami);
      navigate(`/users/${whoami.id}`);
    } catch (e) {
      // TODO: handle error
      console.error(e);
    }
  };

  return (
    <RedirectAuthenticated>
      <div className="flex w-[70rem] items-center justify-center border-none shadow-none">
        <Card className="flex items-center justify-center border-none p-8">
          <div className="flex flex-row items-center gap-20">
            <StepperView step="signup-with">
              <SignupWith onSignup={signup} isLoading={isLoading} />
            </StepperView>

            <StepperView step="user-info">
              <SignupUserForm onCreate={createUser} isLoading={isLoading} />
            </StepperView>
          </div>
        </Card>
      </div>
    </RedirectAuthenticated>
  );
};

interface SignupWithProps {
  onSignup: AuthWith<void>;
  isLoading: boolean;
}

const SignupWith: FC<SignupWithProps> = ({onSignup, isLoading}) => {
  const form = useForm<EmailAndPassword>({
    resolver: zodResolver(emailAndPasswordSchema),
  });

  return (
    <Card className="float-right w-[35rem] flex-col items-baseline justify-center border-0 border-none shadow-none">
      <div className="text-center text-4xl font-medium">Create an account</div>
      <p className="text-center">
        Already member ?{" "}
        <Button variant="link" className="text-violet-500">
          <Link to="/login">Login</Link>
        </Button>
      </p>
      <div className="flex flex-row gap-2">
        <li className="relative mb-7 mt-5 w-[20rem] list-none border-t-2 border-purple-600">
          <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white">
            1
          </div>
        </li>

        <li className="relative mb-6 mt-5 w-[20rem] list-none border-t-2 border-purple-100">
          <div className="absolute right-1 flex h-6 w-6 translate-x-4 transform items-center justify-center rounded-full bg-purple-100 text-white">
            2
          </div>
        </li>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col items-center justify-center space-y-6"
          onSubmit={form.handleSubmit(onSignup)}
        >
          <div className="w-full">
            <FormField
              name="email"
              control={form.control}
              render={({field}) => (
                <FormItem data-testid="email-field" className="text-md">
                  <FormLabel>Email</FormLabel>
                  <FormControl className="h-12">
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="h-auto w-full">
            <FormField
              name="password"
              control={form.control}
              render={({field}) => (
                <FormItem data-testid="password-field" className="text-md">
                  <FormLabel>Password</FormLabel>
                  <FormControl className="h-12">
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <Button
              data-testid="continue-signup"
              className="mb-2 h-12 w-full rounded-full bg-violet-500"
              type="submit"
              isLoading={isLoading}
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>

      <div className="flex flex-col justify-center space-y-[1.5rem]">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">OR</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button size="lg" 
            variant="outline"
            className="w-full" 
            onClick={() => void onSignup(GoogleAuthProvider)}
          >
            <Icons.google className="mr-2 h-4 w-4 text-violet-500" />{" "}
            sign-in with Google
          </Button>
        </div>
      </div>
    </Card>
  );
};

interface SignupUserFormProps {
  onCreate(user: User): void;
  isLoading: boolean;
}

const SignupUserForm: FC<SignupUserFormProps> = ({onCreate, isLoading}) => {
  const form = useForm<User>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      categories: [],
      // bind cached email to the to-be registered user
      email: getCachedAuth().email ?? "",
      provider_id: getCachedAuth().id ?? "",
    },
  });

  return (
    <Card className="float-right w-[45rem] flex-col items-baseline justify-center border-none shadow-none">
      <div className="text-center text-4xl font-medium">Create an account</div>
      <p className="text-center">
        Already member ?{" "}
        <Button variant="link" className="text-violet-500">
          <Link to="/login">Login</Link>
        </Button>
      </p>
      <div className="flex flex-row gap-2 mb-7">
        <li className="relative  mt-5 w-[25rem] list-none border-t-2 border-purple-100">
          <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-white">
            1
          </div>
        </li>

        <li className="relative mt-5 w-[25rem] list-none border-t-2 border-purple-600">
          <div className="absolute right-1 flex h-6 w-6 translate-x-4 transform items-center justify-center rounded-full bg-purple-600 text-white">
            2
          </div>
        </li>
      </div>
      <Form {...form}>
        <form
          className="mb-6 flex flex-col items-center justify-center space-y-6"
          onSubmit={form.handleSubmit(onCreate)}
        >
          <div className="flex flex-col sm:flex-row gap-6 w-[40rem]">
            <div className="w-full sm:w-1/2 mr-5">
              {/* First Name */}
              <FormField
                name="first_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md">
                    <FormLabel>Name</FormLabel>
                    <FormControl className="h-12">
                      <Input data-testid="first_name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last Name */}
              <FormField
                name="last_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md">
                    <FormLabel>Last name</FormLabel>
                    <FormControl className="h-12">
                      <Input data-testid="last_name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Username */}
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md">
                    <FormLabel>Username</FormLabel>
                    <FormControl className="h-12">
                      <Input data-testid="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sex */}
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Genre</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="sex-select">
                          <SelectValue placeholder="Select your sex" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="M">Male</SelectItem>
                        <SelectItem value="F" data-testid="female-sex">
                          Female
                        </SelectItem>
                        <SelectItem value="OTHER">Nothing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full sm:w-1/2 mt-2">
              {/* Birth Date */}
              <FormField
                name="birth_date"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md flex flex-col">
                    <FormLabel>Birthdate</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full h-12">
                          <Button
                            data-testid="date-picker"
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          onChange={field.onChange}
                          value={field.value}
                          locale="en-EN"
                          minDate={new Date("1900-01-01")}
                          maxDate={new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                name="bio"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md">
                    <FormLabel>Bio</FormLabel>
                    <FormControl className="h-12">
                      <Input data-testid="bio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* About */}
              <FormField
                name="about"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="text-md">
                    <FormLabel>About</FormLabel>
                    <FormControl className="h-32">
                      <Textarea data-testid="about" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>


          <div className="w-full">
            <Button
              className="h-12 w-full rounded-full bg-violet-500"
              type="submit"
              isLoading={isLoading}
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
