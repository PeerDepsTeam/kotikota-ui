import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {Icons} from "@/components/common/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/shadcn-ui/card";
import {Input} from "@/components/shadcn-ui/input";
import {Label} from "@/components/shadcn-ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/shadcn-ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";
import {
  PaymentRequest,
  PaymentRequestPaymentMethodEnum,
  PaymentRequestPaymentTypeEnum,
  Post,
} from "@/services/api/gen";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  paymentRequestSchema,
  PaymentRequestType,
} from "@/features/payment/schema.ts";
import {useAuthStore} from "@/features/auth";
import {useToast} from "@/hooks";
import {PaymentProvider, PostProvider} from "@/services/api";
import {MOBILE_MONEYS} from "@/features/payment/constants.ts";
import {nanoid} from "nanoid";
import {Button} from "@/components/shadcn-ui/button.tsx";

export const PaymentCard = () => {
  const form = useForm<PaymentRequestType>({
    resolver: zodResolver(paymentRequestSchema),
  });

  const [post, setPost] = useState<Post>();
  const {id} = useParams();
  const user = useAuthStore((auth) => auth.user!);
  const toast = useToast();
  const navigate = useNavigate();

  const errors = form.formState.errors;
  console.log("errors", errors);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await PostProvider.getById(id);
      setPost(data);
    };

    if (id) {
      void fetchPost();
    }
  }, [id]);

  const initializePayment: SubmitHandler<any> = async (data) => {
    try {
      const payment = {
        ...data,
        id: nanoid(),
        post_id: id,
        from: user,
        to: post?.author,
      } as PaymentRequest;
      await PaymentProvider.initPayment(payment);
      navigate("/");
    } catch (e) {
      toast({
        variant: "destructive",
        message:
          "Something when wrong during payment process. please try again",
      });
    }
  };

  const paymentMethod = form.watch("payment_method");
  const isMobileMoney = MOBILE_MONEYS.includes(
    paymentMethod as PaymentRequestPaymentMethodEnum
  );

  return (
    <form onSubmit={form.handleSubmit(initializePayment)}>
      <Card className="m-auto w-1/2 border-none">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>
            Add a new payment method to your account.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <RadioGroup
            defaultValue={PaymentRequestPaymentMethodEnum.MVOLA}
            className="flex justify-between"
            onClick={(e) =>
              form.setValue("payment_method", (e.target as any).value)
            }
          >
            <div>
              <RadioGroupItem
                value={PaymentRequestPaymentMethodEnum.MVOLA}
                id="MVOLA"
                className="peer sr-only"
              />
              <Label
                htmlFor="MVOLA"
                className="flex w-20 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.mvola className="h-full w-full" />
              </Label>
            </div>

            <div>
              <RadioGroupItem
                value={PaymentRequestPaymentMethodEnum.AIRTEL_MONEY}
                id="AIRTEL_MONEY"
                className="peer sr-only"
              />
              <Label
                htmlFor="AIRTEL_MONEY"
                className="flex w-20 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.airtel className="h-full w-full" />
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value={PaymentRequestPaymentMethodEnum.ORANGE_MONEY}
                id="ORANGE_MONEY"
                className="peer sr-only"
              />
              <Label
                htmlFor="ORANGE_MONEY"
                className="flex w-20 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.orange className="h-full w-full" />
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value={PaymentRequestPaymentMethodEnum.VISA}
                id="VISA"
                className="peer sr-only"
              />
              <Label
                htmlFor="VISA"
                className="flex w-20 flex-col items-center justify-between rounded-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.mastercard className="h-full w-full" />
              </Label>
            </div>
          </RadioGroup>

          <div className="grid gap-2">
            <Label htmlFor="label">Project</Label>
            <Input
              disabled
              type="text"
              id="label"
              placeholder="Donation"
              value={post?.title!}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="label">Label or Description</Label>
            <Input
              {...form.register("label")}
              type="text"
              id="label"
              placeholder="Donation"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ref">Reference(REF-Phone Number)</Label>
            <Input
              {...form.register("reference")}
              type="text"
              id="ref"
              placeholder="REF-XX XX XXX XX"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              {...form.register("amount")}
              type="number"
              id="amount"
              placeholder="IN MGA"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="number">
              {isMobileMoney ? "Phone Number" : "Card number"}
            </Label>
            <Input id="number" placeholder="" />
          </div>

          {isMobileMoney ? (
            <div className="grid gap-2">
              <Label htmlFor="number">Secret Code</Label>
              <Input id="number" placeholder="" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">January</SelectItem>
                      <SelectItem value="2">February</SelectItem>
                      <SelectItem value="3">March</SelectItem>
                      <SelectItem value="4">April</SelectItem>
                      <SelectItem value="5">May</SelectItem>
                      <SelectItem value="6">June</SelectItem>
                      <SelectItem value="7">July</SelectItem>
                      <SelectItem value="8">August</SelectItem>
                      <SelectItem value="9">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 10}, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </>
          )}
          <div className="grid gap-2">
            <Label htmlFor="month">Type</Label>
            <Select
              onValueChange={(value) => {
                form.setValue("payment_type", value);
                console.log("val", value);
              }}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PaymentRequestPaymentTypeEnum.DONATION}>
                  DONATION
                </SelectItem>
                <SelectItem value={PaymentRequestPaymentTypeEnum.ACTION}>
                  ACTION
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CardFooter>
            <Button type="submit">Confirmer</Button>
          </CardFooter>
        </CardContent>
      </Card>
    </form>
  );
};
