import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Smartphone, Bell } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SendNotifications = () => {
  const [selectedTab, setSelectedTab] = useState("email");
  const [value, setValue] = useState("");

  return (
    <div className="p-8 space-y-6">
      <h3 className="text-gray-600 text-xl font-semibold">
        Notification to Verified Bettors
      </h3>

      <div className="">
        <Card className="mx-auto p-6">
          <CardContent>
            <form className="space-y-6">
              <Tabs
                value={selectedTab}
                onValueChange={setSelectedTab}
                className="w-1/2"
              >
                <TabsList className="mb-4 grid min-h-40 w-full grid-cols-3">
                  <TabsTrigger
                    value="email"
                    className="flex h-full items-center justify-center py-2"
                  >
                    <Mail className="mr-2" />
                    Send Via Email
                  </TabsTrigger>
                  <TabsTrigger
                    value="sms"
                    className="flex h-full items-center justify-center py-2"
                  >
                    <Smartphone className="mr-2" />
                    Send Via SMS
                  </TabsTrigger>
                  <TabsTrigger
                    value="firebase"
                    className="flex h-full items-center justify-center py-2"
                  >
                    <Bell className="mr-2" />
                    Send Via Firebase
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="beingSentTo">Being Sent To *</Label>
                  <Select className="h-14 focus:ring-2 focus:ring-indigo-500 focus:border-none">
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

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Subject / Title"
                    className="h-14 focus:ring-2 focus:ring-indigo-500 focus:border-none"
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message">Message *</Label>
                  <div className="mb-24">
                    <ReactQuill
                      id="message"
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      className="h-64 focus:ring-2 focus:ring-indigo-500 focus:border-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="startForm">Start Form *</Label>
                    <Input
                      id="startForm"
                      placeholder="Start from user id. e.g. 1"
                      className="h-14 focus:ring-2 focus:ring-indigo-500 focus:border-none"
                    />
                  </div>
                  <div>
                    <Label htmlFor="perBatch">Per Batch *</Label>
                    <div className="flex">
                      <Input
                        id="perBatch"
                        placeholder="How many users"
                        className="flex-grow h-14 focus:ring-2 focus:ring-indigo-500 focus:border-none"
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
                        className="flex-grow h-14 focus:ring-2 focus:ring-indigo-500 focus:border-none"
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
