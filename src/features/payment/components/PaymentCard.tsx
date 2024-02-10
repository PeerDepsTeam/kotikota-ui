import {Icons} from "@/components/common/icons";
import {Button} from "@/components/shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import {FC, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IntitiatePayment, paymentRequestSchema} from "..";
import {useToast} from "@/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {useAuthStore} from "@/features/auth";
import {PaymentProvider, PostProvider} from "@/services/api";

export const PaymentCard: FC = () => {
  const user = useAuthStore((auth) => auth.user!);
  const [post, setPost] = useState<Post>();
  const navigate = useNavigate();

  const {id} = useParams();
  const toast = useToast();
  const {register, handleSubmit} = useForm<IntitiatePayment>({
    resolver: zodResolver(paymentRequestSchema),
  });
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentRequestPaymentMethodEnum>();
  let mobileMoney: PaymentRequestPaymentMethodEnum[] = [
    PaymentRequestPaymentMethodEnum.MVOLA,
    PaymentRequestPaymentMethodEnum.AIRTEL_MONEY,
    PaymentRequestPaymentMethodEnum.ORANGE_MONEY,
  ];
  let isMobileMoney: boolean = mobileMoney.includes(paymentMethod);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await PostProvider.getById(id);
      setPost(data);
    };

    if (id) {
      void fetchPost();
    }
  }, [id]);

  const paymentInitiation: SubmitHandler<IntitiatePayment> = async (data) => {
    try {
      const toCreate: PaymentRequest = {
        ...data,
        post_id: id,
        from: user,
        to: post?.author,
      };
      await PaymentProvider.initPayment(toCreate);
      navigate("/");
    } catch (e) {
      toast({
        variant: "destructive",
        message: "Somthing when wrong during payment process. please try again",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => paymentInitiation(data))}>
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
            {...register("payment_method")}
            className="flex justify-between"
            onClick={(e) => setPaymentMethod(e.target?.value)}
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
                <Icons.mvola className="mb-3 h-6 w-6" />
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
                <Icons.airtel className="mb-3 h-6 w-6" />
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
                <Icons.orange className="mb-3 h-6 w-6" />
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
                <Icons.mastercard className="mb-3 h-6 w-6" />
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
              value="Creation Pipeline"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="label">Label or Description</Label>
            <Input
              {...register("label")}
              type="text"
              id="label"
              placeholder="Donation"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ref">Reference(REF-Phone Number)</Label>
            <Input
              {...register("reference")}
              type="text"
              id="ref"
              placeholder="REF-XX XX XXX XX"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              {...register("amount")}
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
              defaultValue={PaymentRequestPaymentTypeEnum.DONATION}
              {...register("payment_type")}
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
        </CardContent>
        <CardFooter>
          <Button className="w-full text-white" type="submit">
            Continue
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
