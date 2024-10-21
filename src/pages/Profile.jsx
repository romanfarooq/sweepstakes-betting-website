import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "react-hot-toast";
import { User, Lock, Bell, Palette, Shield } from "lucide-react";

const ProfileSettings = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    bio: "Crypto enthusiast and developer",
  });

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = (section) => {
    toast.success(`${section} updated successfully!`);
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-5xl">
        <Card className="border-gray-700 bg-gray-900 text-white">
          <CardHeader>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <p className="text-gray-400">@{userInfo.username}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid h-full w-full gap-4 bg-gray-800 py-6 sm:gap-0 sm:py-0 md:grid-cols-2 lg:grid-cols-5">
                <TabsTrigger
                  value="profile"
                  className="data-[state=active]:w-full data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className="data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                >
                  <Palette className="mr-2 h-4 w-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Security
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      value={userInfo.username}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      name="bio"
                      value={userInfo.bio}
                      onChange={handleInputChange}
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <Button
                    onClick={() => handleSave("Profile")}
                    className="h-12 w-full bg-sky-800 text-white hover:bg-sky-700 sm:w-auto"
                  >
                    Save Changes
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="account" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white"
                    />
                  </div>
                  <Button
                    onClick={() => handleSave("Password")}
                    className="h-12 w-full bg-sky-800 text-white hover:bg-sky-700 sm:w-auto"
                  >
                    Update Password
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications" className="text-lg">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-400">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      className="bg-gray-800 data-[state=checked]:bg-sky-600"
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications" className="text-lg">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-gray-400">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      className="bg-gray-800 data-[state=checked]:bg-sky-600"
                    />
                  </div>
                  <Button
                    onClick={() => handleSave("Notification preferences")}
                    className="h-12 w-full bg-sky-800 text-white hover:bg-sky-700 sm:w-auto"
                  >
                    Save Preferences
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="appearance" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dark-mode" className="text-lg">
                        Dark Mode
                      </Label>
                      <p className="text-sm text-gray-400">
                        Use dark theme across the app
                      </p>
                    </div>
                    <Switch
                      id="dark-mode"
                      className="bg-gray-800 data-[state=checked]:bg-sky-600"
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="mt-2 h-12 w-full rounded-md border border-gray-700 bg-gray-800 px-3 text-white"
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <Button
                    onClick={() => handleSave("Appearance settings")}
                    className="h-12 w-full bg-sky-800 text-white hover:bg-sky-700 sm:w-auto"
                  >
                    Save Settings
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor" className="text-lg">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-sm text-gray-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch
                      id="two-factor"
                      className="bg-gray-800 data-[state=checked]:bg-sky-600"
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div>
                    <Label htmlFor="session-history" className="text-lg">
                      Session History
                    </Label>
                    <p className="text-sm text-gray-400">
                      View and manage your active sessions
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 h-12 border-gray-700 bg-gray-800 text-white hover:bg-gray-700 hover:text-white"
                    >
                      View Sessions
                    </Button>
                  </div>
                  <Button
                    onClick={() => handleSave("Security settings")}
                    className="h-12 w-full bg-sky-800 text-white hover:bg-sky-700 sm:w-auto"
                  >
                    Save Settings
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSettings;
