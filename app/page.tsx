import type { Metadata } from "next";

import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { env } from "process";
import Link from "next/link";

export const runtime = "edge";

const notifications = [
  {
    title: "Turu Is Important",
    author: "@ahmadAria001",
    authorLink: "https://github.com/ahmadAria001",
  },
  {
    title: "Memento Mori",
    author: "@SyahrulBhudiF",
    authorLink: "https://github.com/SyahrulBhudiF",
  },
  {
    title: "nothing special.",
    author: "@RaihanFazzaufaR",
    authorLink: "https://github.com/RaihanFazzaufaR",
  },
];

const logo =
  "https://raw.githubusercontent.com/gj-bots/assets-holder/main/file.jpg";

export default function IndexPage() {
  return (
    <div className="w-screen p-5">
      <div className="w-full h-full grid grid-cols-2">
        <div className="col-span-full flex justify-center align-middle">
          <Card
            className={
              "w-96 h-fit dark:text-white dark:border-2 dark:border-solid dark:border-slate-800 rounded"
            }
          >
            <CardHeader>
              <CardTitle>
                Project
                <strong className="text-sky-500"> {env.APP_NAME}</strong>
              </CardTitle>
              <CardDescription>
                By{" "}
                <Link
                  target="_blank"
                  href="https://github.com/gj-bots"
                  className="underline text-amber-400"
                >
                  <b>GjBots</b>
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center dark:border-2 dark:border-solid dark:border-slate-800 rounded">
                <img src={logo} className="w-full h-full rounded" />
              </div>
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <Link href={notification.authorLink}>
                          <b className="text-amber-300 underline">
                            {notification.author}
                          </b>
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
