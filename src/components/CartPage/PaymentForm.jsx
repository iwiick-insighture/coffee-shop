import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useOrders from "../../api/hooks/useOrders";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PaymentForm = ({ coffees, cartItems = [] }) => {
  const navigate = useNavigate();
  const { createOrder } = useOrders();

  const getCoffee = (coffeeId) => {
    return coffees?.find((coffee) => coffee?.id == coffeeId);
  };

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      number: "",
      expdate: "",
      cvv: "",
    },
  });

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * getCoffee(item.coffeeId)?.price;
    });

    return total;
  };

  const getTotalDiscount = () => {
    return (getTotalPrice() * 0.1).toFixed(2);
  };

  async function onSubmit() {
    await createOrder();
    navigate("/orders");
  }

  return (
    <div className="py-10 px-5 rounded-lg">
      <h3 className="text-left text-xl font-semibold mx-5">Payment Details</h3>
      <div className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex text-left">
                    Card Holder Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Placeholder" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex text-left">
                    Credit Card Number
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Placeholder" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex text-left">
                      Expiry date
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Placeholder" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex text-left">CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="Placeholder" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="p-5 bg-[#E2E4EB36] rounded-lg">
              <div className="flex flex-row justify-between my-3">
                <p>Total</p>
                <p>${getTotalPrice()}</p>
              </div>
              <div className="flex flex-row justify-between my-3">
                <p>Discount</p>
                <p>${getTotalDiscount()}</p>
              </div>
              <div className="flex flex-row justify-between my-3 border-y-2 border-[#E2E4EB] py-3">
                <p className="font-medium">Subtotal</p>
                <p>{(getTotalPrice() - getTotalDiscount()).toFixed(2)}</p>
              </div>
            </div>
            <Button className="w-full bg-[#0683DE] text-white">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PaymentForm;
