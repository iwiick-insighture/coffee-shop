import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { MoreHorizontal } from "lucide-react";

export const getColumns = (
  removeCoffeeItem,
  updateCoffeeItem
) => [
  {
    accessorKey: "name",
    header: "Item Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price ($)",
  },
  {
    accessorKey: "numberOfItems",
    header: "Number of Items",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const coffeeItem = row.original;

      const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedItem = {
          name: e.target.name.value,
          description: e.target.description.value,
          price: e.target.price.value,
          numberOfItems: e.target.numberOfItems.value,
        };
        updateCoffeeItem(coffeeItem.id, updatedItem);
      };

      return (
        <Dialog>
          <DropdownMenu className="select-auto">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DialogTrigger asChild>
                <DropdownMenuItem>
                  <span>Edit</span>
                </DropdownMenuItem>
              </DialogTrigger>

              <DropdownMenuItem onClick={() => removeCoffeeItem(coffeeItem.id)}>
                Remove
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleEditSubmit}>
              <DialogHeader>
                <DialogTitle>Edit Coffee</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Coffee Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue={coffeeItem?.name || ""}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    defaultValue={coffeeItem?.description}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="price"
                    defaultValue={coffeeItem?.price}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Stock
                  </Label>
                  <Input
                    id="numberOfItems"
                    defaultValue={coffeeItem?.numberOfItems}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
