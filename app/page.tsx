import { Icon } from "@/components/icon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 ">
        <p>
          <Icon className="h-4 w-4" name="radix/avatar">
            These icons are loaded from the sprite
          </Icon>
        </p>
        <Icon className="h-4 w-4" name="radix/pencil-1" />
        <Icon className="h-4 w-4" name="radix/trash" />
        <Icon className="h-4 w-4" name="lucide/activity" />
        <Icon className="h-4 w-4" name="lucide/alarm-plus" />
        <Icon className="h-4 w-4" name="lucide/alert-triangle" />
        <Icon
          className="h-4 w-4"
          name="lucide/align-horizontal-distribute-end"
        />
      </div>
    </main>
  );
}
