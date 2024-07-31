import Victory from "@/assets/victory.svg";
import Background from "@/assets/login2.png"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setName] = useState("");

    const handleLogin=async ()=>{

    }
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email: email,
                username: username,
                password: password
            });
            // window.location.href = "http://localhost:3000/profile";
        } catch (error) {
            console.error('Error during signup:', error);
            if (error.response) {
                console.error('Response error:', error.response.data);
            } else if (error.request) {
                console.error('Request error:', error.request);
            } else {
                console.error('General error:', error.message);
            }
        }
    };
    

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[90vh] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="ml-5 flex items-center justify-center xl:ml-10">
                        <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
                        <img src={Victory} alt="Victory emoji" className="h-[100px]"/>
                    </div>
                    <p className="text-center">Fill in the details to get started with Sync</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Tabs className="w-3/4">
                        <TabsList className="bg-transparent rounded-none w-full flex">
                            <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                            <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Sign up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                            <Input placeholder="Email" 
                                type="email" 
                                className="rounded-full p-6" 
                                value={email} 
                                onChange={e=>setEmail(e.target.value)}/>
                            <Input placeholder="Password" 
                                type="password" 
                                className="rounded-full p-6" 
                                value={password} 
                                onChange={e=>setPassword(e.target.value)}/>
                                <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
                        </TabsContent>
                        <TabsContent value="signup" className="flex flex-col gap-5">
                        <Input placeholder="Email" 
                                name="email"
                                type="email" 
                                className="rounded-full p-6" 
                                value={email} 
                                onChange={e=>setEmail(e.target.value)}/>
                        <Input placeholder="username" 
                                name="username"
                                type="text" 
                                className="rounded-full p-6" 
                                value={username} 
                                onChange={e=>setName(e.target.value)}/>
                            <Input placeholder="Password"
                                name="password" 
                                type="password" 
                                className="rounded-full p-6" 
                                value={password} 
                                onChange={e=>setPassword(e.target.value)}/>
                            {/* <Input placeholder="Confirm Password" 
                                name="confirmpassword"
                                type="password" 
                                className="rounded-full p-6" 
                                value={confirmPassword} 
                                onChange={e=>setConfirmPassword(e.target.value)}/> */}
                                <Button className="rounded-full p-6" onClick={handleSignup}>Sign up</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="hidden xl:flex justify-center items-center">
                <img src={Background} alt="" className="h-[500px]"/>
            </div>
        </div>
    </div>
  )
}

export default Auth