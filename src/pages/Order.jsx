import { Button } from "@components/ui/button";

const Order = () => {
  return (
    <section>
      <div className="relative">
        <h3 className="text-left font-semibold text-2xl">Order Confirmation</h3>
        <div className="py-5">
          <div className="my-5 shadow rounded-lg bg-white">
            <div className="flex flex-col gap-5 pt-10 px-5 text-left">
              <div className="px-5 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">
                  Thank you for your order
                </h3>
                <p>
                  Your Order will be Processed within the next 30 minuets, we
                  will notify you on the status of your order{" "}
                </p>
              </div>
              <div className="flex flex-col gap-1 p-5 mx-5 rounded-lg bg-[#E2E4EB36]">
                <p className="font-semibold">Jane Doe</p>
                <p>123 Main Street, Apt 4B</p>
                <p>Cityville, State 56789</p>
                <p>Country</p>
              </div>
              <div className="mx-5 mb-10">
                <Button className="bg-[#0683DE]">Track Order</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
