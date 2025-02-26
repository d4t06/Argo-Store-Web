import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui";

type Props = {
  count: number;
};

export default function BubbleCartBtn({ count }: Props) {
  const classes = {
    bubble: `absolute text-center bg-[#cee9b6] 
			-top-[16px] -left-[16px] rounded-full w-[32px] h-[32px]`,
  };

  if (!count) return;

  return (
    <Button size={"clear"} className="p-2">
      <ShoppingBagIcon className="w-6" />
      <div className={classes.bubble}>
        <span className="text-xl font-bold text-[#5a9e87] leading-[32px]">{count}</span>
      </div>
    </Button>
  );
}
