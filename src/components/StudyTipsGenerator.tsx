"use client";

import { useState, useRef, useEffect } from "react";
import { generateIeltsTips } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, LoaderCircle, Sparkles, User, Bot, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type AreaOfFocus = "writing" | "speaking" | "reading" | "listening";

type Message = {
  role: 'user' | 'model' | 'system';
  content: string;
};

const StudyTipsGenerator = () => {
  const [areaOfFocus, setAreaOfFocus] = useState<AreaOfFocus | "">("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!areaOfFocus) {
      toast({
        title: "No area selected",
        description: "Please select an area of focus to get tips.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setMessages([]);
    setChatStarted(true);

    try {
      const result = await generateIeltsTips({ areaOfFocus });
      if (result.tips) {
        setMessages([
          { role: 'system', content: `You are now chatting about: ${areaOfFocus}` },
          { role: 'model', content: result.tips }
        ]);
      } else {
        throw new Error("Failed to generate initial tips. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      setChatStarted(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim() || !areaOfFocus) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: currentMessage }];
    setMessages(newMessages);
    setCurrentMessage("");
    setLoading(true);
    
    const history = newMessages
      .filter(m => m.role !== 'system')
      .map(m => ({
        role: m.role as 'user' | 'model',
        content: [{ text: m.content }]
      }));

    try {
      const result = await generateIeltsTips({ areaOfFocus, history });
      if (result.tips) {
        setMessages(prev => [...prev, { role: 'model', content: result.tips }]);
      } else {
        throw new Error("Failed to get a response. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      setMessages(prev => [...prev, { role: 'system', content: `Error: ${errorMessage}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-12 md:grid-cols-2 items-start">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
          AI-Powered Assistant
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get Instant IELTS Tips</h2>
        <p className="text-muted-foreground">
          Select an area you want to improve, and our AI tutor will provide you with personalized preparation tips to boost your score.
        </p>
        <form onSubmit={handleStartChat} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="area-of-focus">Area of Focus</Label>
            <Select onValueChange={(value: AreaOfFocus) => setAreaOfFocus(value)} value={areaOfFocus} disabled={chatStarted}>
              <SelectTrigger id="area-of-focus" className="w-full h-9 mt-2">
                <SelectValue placeholder="Select an area..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="writing">Writing</SelectItem>
                <SelectItem value="speaking">Speaking</SelectItem>
                <SelectItem value="reading">Reading</SelectItem>
                <SelectItem value="listening">Listening</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {!chatStarted && (
            <Button type="submit" disabled={loading} className="w-full shadow-md">
              {loading ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Tips
            </Button>
          )}
        </form>
      </div>
      <Card className="shadow-lg bg-card h-[500px] flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-primary" />
            <CardTitle>Your AI Tutor Chat</CardTitle>
          </div>
          <CardDescription>
            {chatStarted ? `Chatting about: ${areaOfFocus}` : "Start a session to chat with the AI tutor."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden flex flex-col">
          <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {!chatStarted && !loading && (
                 <div className="flex h-full items-center justify-center">
                    <p className="text-center text-muted-foreground">Select an area and click "Generate Tips" to start.</p>
                 </div>
              )}
              {loading && messages.length === 0 && (
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                    <span>Generating initial tips...</span>
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3 text-sm",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "model" && <Bot className="w-6 h-6 flex-shrink-0 text-primary" />}
                  {message.content && (
                     <div
                        className={cn(
                        "rounded-lg p-3 max-w-xs md:max-w-md",
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                        message.role === "system" && "text-center w-full bg-transparent text-muted-foreground text-xs italic"
                        )}
                    >
                        <div className="prose prose-sm prose-invert max-w-none text-foreground whitespace-pre-wrap">{message.content}</div>
                    </div>
                  )}
                   {message.role === "user" && <User className="w-6 h-6 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </ScrollArea>
           {chatStarted && (
            <form onSubmit={handleSendMessage} className="mt-4 flex gap-2 border-t pt-4">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Ask a follow-up question..."
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !currentMessage.trim()} size="icon">
                {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyTipsGenerator;
