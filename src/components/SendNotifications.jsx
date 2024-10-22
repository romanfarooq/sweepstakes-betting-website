import { useState } from "react";
import { Mail, Smartphone, Bell, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SendNotifications = () => {
  const [selectedTab, setSelectedTab] = useState("email");
  const [value, setValue] = useState("");

  return (
    <div className="space-y-6 p-8">
      <h3 className="text-xl font-semibold text-gray-600">
        Notification to Verified Bettors
      </h3>

      <div className="">
        <Card className="mx-auto p-6">
          <CardContent>
            <form className="space-y-6">
              <Tabs
                value={selectedTab}
                onValueChange={setSelectedTab}
                className="w-full 2xl:w-1/2"
              >
                <TabsList className="mb-4 grid min-h-28 w-full grid-cols-3 gap-3 bg-white">
                  <TabsTrigger
                    value="email"
                    className={cn(
                      "relative flex h-full items-center justify-center border-2 border-gray-300 bg-gray-200 py-2",
                      { "border-4 border-indigo-500": selectedTab === "email" },
                    )}
                  >
                    {selectedTab === "email" && (
                      <Check className="absolute -right-2 top-0 mr-2 w-6 rounded-bl-lg bg-indigo-600 text-white" />
                    )}
                    <Mail className="mr-2" />
                    Send Via Email
                  </TabsTrigger>
                  <TabsTrigger
                    value="sms"
                    className={cn(
                      "relative flex h-full items-center justify-center border-2 border-gray-300 bg-gray-200 py-2",
                      { "border-4 border-indigo-500": selectedTab === "sms" },
                    )}
                  >
                    {selectedTab === "sms" && (
                      <Check className="absolute -right-2 top-0 mr-2 w-6 rounded-bl-lg bg-indigo-600 text-white" />
                    )}
                    <Smartphone className="mr-2" />
                    Send Via SMS
                  </TabsTrigger>
                  <TabsTrigger
                    value="firebase"
                    className={cn(
                      "relative flex h-full items-center justify-center border-2 border-gray-300 bg-gray-200 py-2",
                      {
                        "border-4 border-indigo-500":
                          selectedTab === "firebase",
                      },
                    )}
                  >
                    {selectedTab === "firebase" && (
                      <Check className="absolute -right-2 top-0 mr-2 w-6 rounded-bl-lg bg-indigo-600 text-white" />
                    )}
                    <Bell className="mr-2" />
                    Send Via Firebase
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="beingSentTo">Being Sent To *</Label>
                  <Select className="h-14 focus:border-none focus:ring-2 focus:ring-indigo-500">
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipients" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Bettors</SelectItem>
                      <SelectItem value="verified">Verified Bettors</SelectItem>
                      <SelectItem value="new">New Bettors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {(selectedTab === "email" || selectedTab === "firebase") && (
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Subject / Title"
                      className="h-14 focus:border-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                )}

                {selectedTab === "firebase" && (
                  <div>
                    <Label
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Upload file
                    </Label>
                    <div className="relative rounded-md border border-gray-200 bg-gray-100">
                      <input
                        className="absolute inset-0 h-14 w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 opacity-0"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        accept=".svg,.png,.jpg,.gif"
                      />
                      <Button className="flex h-14 items-center justify-center rounded-lg border border-gray-300 bg-gray-200 px-4 text-gray-900 hover:bg-gray-300">
                        Choose File
                      </Button>
                    </div>

                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>
                )}

                {selectedTab === "email" && (
                  <div className="mb-6">
                    <Label htmlFor="message">Message *</Label>
                    <div className="mb-24">
                      <ReactQuill
                        id="message"
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        className="h-64 focus:border-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}
                {selectedTab !== "email" && (
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      cols="30"
                      className="h-64 focus:border-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="startForm">Start Form *</Label>
                    <Input
                      id="startForm"
                      placeholder="Start from user id. e.g. 1"
                      className="h-14 focus:border-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="perBatch">Per Batch *</Label>
                    <div className="flex">
                      <Input
                        id="perBatch"
                        placeholder="How many users"
                        className="h-14 flex-grow focus:border-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <span className="flex items-center justify-center rounded-r bg-gray-100 px-3">
                        User
                      </span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="coolingPeriod">Cooling Period *</Label>
                    <div className="flex">
                      <Input
                        id="coolingPeriod"
                        placeholder="Waiting time"
                        className="h-14 flex-grow focus:border-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <span className="flex items-center justify-center rounded-r bg-gray-100 px-3">
                        Seconds
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="h-12 w-full bg-indigo-600 hover:bg-indigo-500"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SendNotifications;
