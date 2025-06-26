var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

import React2 from "react";
import jsxRuntime from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
window.React = React2;
window.jsxRuntime = jsxRuntime;
window.motion = motion;
window.AnimatePresence = AnimatePresence;
var react_default = React2;

import { useCallback, useEffect, useState } from "react";
var useAppToPlatform = /* @__PURE__ */ __name(() => {
  const [isInBuilder, setIsInBuilder] = useState(false);
  useEffect(() => {
    const isIframe = window !== window.parent;
    setIsInBuilder(isIframe);
  }, []);
  return isInBuilder; 
}); 

import { clsx } from "https://esm.sh/clsx?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { twMerge } from "https://esm.sh/tailwind-merge?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
__name(cn, "cn");

import * as React3 from "react";
import * as DialogPrimitive from "https://esm.sh/@radix-ui/react-dialog?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { X } from "lucide-react";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React3.createElement(DialogPortal, null, /* @__PURE__ */ React3.createElement(DialogOverlay, null), /* @__PURE__ */ React3.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React3.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, /* @__PURE__ */ React3.createElement(X, { className: "h-4 w-4" }), /* @__PURE__ */ React3.createElement("span", { className: "sr-only" }, "Close"))
)));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = /* @__PURE__ */ __name(({
  className,
  ...props
}) => /* @__PURE__ */ React3.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
), "DialogHeader");
DialogHeader.displayName = "DialogHeader";
var DialogFooter = /* @__PURE__ */ __name(({
  className,
  ...props
}) => /* @__PURE__ */ React3.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
), "DialogFooter");
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React3.createElement(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

import * as React4 from "react";
import { Slot } from "https://esm.sh/@radix-ui/react-slot?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { cva } from "https://esm.sh/class-variance-authority?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React4.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React4.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

import * as CollapsiblePrimitive from "https://esm.sh/@radix-ui/react-collapsible?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

import * as React5 from "react";
import * as ScrollAreaPrimitive from "https://esm.sh/@radix-ui/react-scroll-area?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
var ScrollArea = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props
  },
  /* @__PURE__ */ React5.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
  /* @__PURE__ */ React5.createElement(ScrollBar, null),
  /* @__PURE__ */ React5.createElement(ScrollAreaPrimitive.Corner, null)
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React5.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React5.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

import React6 from "react";
import { ErrorBoundary } from "https://esm.sh/react-error-boundary?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { useState as useState2 } from "react";
import { createRoot } from "react-dom/client";
var GlobalError = /* @__PURE__ */ __name(({ error }) => {
  const { sendRuntimeErrors } = useAppToPlatform();
  const [sent, setSent] = useState2(false);
  const message = error.message;
  const extractFunctionName = /* @__PURE__ */ __name((error2) => {
    if (error2.stack) {
      const stackLines = error2.stack.split("\n") || [];
      const functionLine = stackLines.find((line) => line.includes("at ") && !line.includes("<anonymous>"));
      if (functionLine) {
        const match = functionLine.match(/at\s+(\w+)/);
        console.log(match);
        return match ? match[1] : null;
      }
    }
    return null;
  }, "extractFunctionName");
  return /* @__PURE__ */ React6.createElement(ErrorModal, { errors: [{ text: message }], onRequestFix: () => {
    const functionName = extractFunctionName(error);
    sendRuntimeErrors([{
      text: functionName ? `${message} at ${functionName}` : message
    }]);
    setSent(true);
  }, showModal: true, sent });
}, "GlobalError");
window.addEventListener("error", (event) => {
  setTimeout(() => {
    const root2 = document.getElementById("root");
    const loadingAppElement = document.querySelector("#root > .loading-root");
    if (root2 && root2.children.length === 0 || loadingAppElement) {
      const appRoot = createRoot(root2);
      appRoot.render(/* @__PURE__ */ React6.createElement(GlobalError, { error: event.error }));
    }
  }, 10);
});
var ErrorBoundaryWrapper = /* @__PURE__ */ __name(({ children }) => {
  const [error, setError] = useState2(null);
  const [sent, setSent] = useState2(false);
  const { sendRuntimeErrors } = useAppToPlatform();
  const fallbackRender = /* @__PURE__ */ __name(({ error: error2 }) => {
    return /* @__PURE__ */ React6.createElement(
      ErrorModal,
      {
        errors: [{ text: error2.message }],
        onRequestFix: () => {
          sendRuntimeErrors([{
            text: error2.message
          }]);
          setSent(true);
        },
        showModal: true,
        sent
      }
    );
  }, "fallbackRender");
  return /* @__PURE__ */ React6.createElement(
    ErrorBoundary,
    {
      fallbackRender,
      onError: (error2) => {
        setError(error2);
      }
    },
    children
  );
}, "ErrorBoundaryWrapper");

import * as React7 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
__name(genId, "genId");
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = /* @__PURE__ */ __name((toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, "addToRemoveQueue");
var reducer = /* @__PURE__ */ __name((state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
}, "reducer");
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
__name(dispatch, "dispatch");
function toast({ ...props }) {
  const id = genId();
  const update = /* @__PURE__ */ __name((props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), "update");
  const dismiss = /* @__PURE__ */ __name(() => dispatch({ type: "DISMISS_TOAST", toastId: id }), "dismiss");
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: /* @__PURE__ */ __name((open) => {
        if (!open) dismiss();
      }, "onOpenChange")
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
__name(toast, "toast");
function useToast() {
  const [state, setState] = React7.useState(memoryState);
  React7.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: /* @__PURE__ */ __name((toastId) => dispatch({ type: "DISMISS_TOAST", toastId }), "dismiss")
  };
}
__name(useToast, "useToast");

import * as React8 from "react";
import * as ToastPrimitives from "https://esm.sh/@radix-ui/react-toast?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { cva as cva2 } from "https://esm.sh/class-variance-authority?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { X as X2 } from "lucide-react";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva2(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React8.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React8.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React8.createElement(X2, { className: "h-4 w-4" })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ React.createElement(ToastProvider, null, toasts.map(function({ id, title, description, action, ...props }) {
    return /* @__PURE__ */ React.createElement(Toast, { key: id, ...props }, /* @__PURE__ */ React.createElement("div", { className: "grid gap-1" }, title && /* @__PURE__ */ React.createElement(ToastTitle, null, title), description && /* @__PURE__ */ React.createElement(ToastDescription, null, description)), action, /* @__PURE__ */ React.createElement(ToastClose, null));
  }), /* @__PURE__ */ React.createElement(ToastViewport, null));
}
__name(Toaster, "Toaster");

import { createContext, useContext, useEffect as useEffect4, useState as useState4 } from "react";
var initialState = {
  theme: "system",
  setTheme: /* @__PURE__ */ __name(() => null, "setTheme")
};
var ThemeProviderContext = createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  ...props
}) {
  const [theme, setTheme] = useState4(
    () => localStorage.getItem(storageKey) || defaultTheme
  );
  useEffect4(() => {
    const root2 = window.document.documentElement;
    root2.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root2.classList.add(systemTheme);
      return;
    }
    root2.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: /* @__PURE__ */ __name((theme2) => {
      localStorage.setItem(storageKey, theme2);
      setTheme(theme2);
    }, "setTheme")
  };
  return /* @__PURE__ */ React.createElement(ThemeProviderContext.Provider, { ...props, value }, children);
}
__name(ThemeProvider, "ThemeProvider");
var useTheme = /* @__PURE__ */ __name(() => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}, "useTheme");

import * as React9 from "react";
import * as DropdownMenuPrimitive from "https://esm.sh/@radix-ui/react-dropdown-menu?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import { Check as Check2, ChevronRight, Circle } from "lucide-react";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React9.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React9.createElement(ChevronRight, { className: "ml-auto" })
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React9.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    ),
    ...props
  }
)));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React9.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React9.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(Check2, { className: "h-4 w-4" }))),
  children
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React9.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React9.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React9.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(Circle, { className: "h-2 w-2 fill-current" }))),
  children
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = /* @__PURE__ */ __name(({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React9.createElement(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
}, "DropdownMenuShortcut");
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

import { motion as motion3 } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
function Header() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ React.createElement(motion3.header, { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 }, className: "border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 py-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement(motion3.div, { className: "flex items-center space-x-3", whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400 } }, /* @__PURE__ */ React.createElement("span", { className: "text-2xl font-bold text-foreground" }, "s16.games")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4" }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm" }, theme === "light" && /* @__PURE__ */ React.createElement(Sun, { className: "h-4 w-4" }), theme === "dark" && /* @__PURE__ */ React.createElement(Moon, { className: "h-4 w-4" }), theme === "system" && /* @__PURE__ */ React.createElement(Monitor, { className: "h-4 w-4" }))), /* @__PURE__ */ React.createElement(DropdownMenuContent, { align: "end", className: "backdrop-blur-xl bg-background/80 border border-border/50" }, /* @__PURE__ */ React.createElement(DropdownMenuItem, { onClick: () => setTheme("light") }, /* @__PURE__ */ React.createElement(Sun, { className: "h-4 w-4 mr-2" }), "Light"), /* @__PURE__ */ React.createElement(DropdownMenuItem, { onClick: () => setTheme("dark") }, /* @__PURE__ */ React.createElement(Moon, { className: "h-4 w-4 mr-2" }), "Dark"), /* @__PURE__ */ React.createElement(DropdownMenuItem, { onClick: () => setTheme("system") }, /* @__PURE__ */ React.createElement(Monitor, { className: "h-4 w-4 mr-2" }), "System")))))));
}
__name(Header, "Header");

import { motion as motion4 } from "framer-motion";
import { Zap, Globe, Shield, Library } from "lucide-react";
function Hero() {
  const scrollToGames = /* @__PURE__ */ __name(() => {
    const gamesSection = document.getElementById("games");
    if (gamesSection) {
      gamesSection.scrollIntoView({ behavior: "smooth" });
    }
  }, "scrollToGames");
  return /* @__PURE__ */ React.createElement("section", { className: "py-20 md:py-32 relative" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 text-center" }, /* @__PURE__ */ React.createElement(motion4.div, { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, delay: 0.2 } }, /* @__PURE__ */ React.createElement(motion4.h1, { className: "text-4xl md:text-7xl font-bold mb-6 leading-tight", initial: { scale: 0.9 }, animate: { scale: 1 }, transition: { duration: 0.8, delay: 0.3 } }, /* @__PURE__ */ React.createElement("span", { className: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent" }, "Free Game Library"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-foreground" }, "for your website")), /* @__PURE__ */ React.createElement(motion4.p, { className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed", initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, delay: 0.5 } }, "Add unblocked games to your site instantly. Over ", /* @__PURE__ */ React.createElement("span", { className: "text-blue-500 font-semibold" }, "1400+ games"), " ready to be used in your site."), /* @__PURE__ */ React.createElement(motion4.div, { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, delay: 0.7 } }, /* @__PURE__ */ React.createElement(Button, { size: "lg", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl", onClick: scrollToGames }, "Browse Games"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "lg", className: "border-border hover:border-blue-400 hover:text-blue-400 px-8 py-4 text-lg rounded-xl", onClick: () => window.open("https://github.com/Bread-Org/s16.games", "_blank") }, "GitHub")), /* @__PURE__ */ React.createElement(motion4.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto", initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.8, delay: 0.9 } }, [
    { icon: Zap, label: "Lightning Fast", desc: "Multiple CDNs" },
    { icon: Globe, label: "Always Online", desc: "Global delivery" },
    { icon: Shield, label: "Reliable", desc: "No downtime" },
    { icon: Library, label: "Free Library", desc: "1400+ games (316 currently, we still have 1100 left)" }
  ].map((feature, index) => /* @__PURE__ */ React.createElement(motion4.div, { key: feature.label, className: "text-center", whileHover: { scale: 1.05, y: -5 }, transition: { type: "spring", stiffness: 400 } }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 mx-auto mb-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-xl" }, /* @__PURE__ */ React.createElement(feature.icon, { className: "h-6 w-6 text-blue-500" })), /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-foreground mb-1" }, feature.label), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, feature.desc)))))));
}
__name(Hero, "Hero");

import { motion as motion5 } from "framer-motion";
import { Copy, Terminal } from "lucide-react";
function CodeSnippet() {
  const { toast: toast2 } = useToast();
  const copyToClipboard = /* @__PURE__ */ __name(() => {
    const code = `<script
  defer
  src="https://cdn.jsdelivr.net/gh/Bread-org/s16.games/embed.js"
    data-api="https://bread-org.github.io/s16.games"
    data-api2="https://bread-org.github.io/s16.chunk2"
  data-target="#gameContainer"
><\/script>`;
    navigator.clipboard.writeText(code);
    toast2({
      title: "Copied to clipboard",
      description: "The code has been copied."
    });
  }, "copyToClipboard");
 return /* @__PURE__ */ React.createElement("section", { className: "py-16 relative" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4" }, /* @__PURE__ */ React.createElement(motion5.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "max-w-4xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ React.createElement(motion5.h2, { className: "text-3xl md:text-4xl font-bold mb-4", initial: { y: 20, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 } }, /* @__PURE__ */ React.createElement("span", { className: "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent" }, "Easy Integration")), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground text-lg" }, "Add 1400+ games to your site with just one line of code")), /* @__PURE__ */ React.createElement(motion5.div, { className: "relative", initial: { scale: 0.95, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 } }, /* @__PURE__ */ React.createElement("div", { className: "bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 text-foreground p-6 rounded-3xl w-full max-w-4xl mx-auto font-mono relative overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-900/50" }, /* @__PURE__ */ React.createElement("div", { className: "relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded-full bg-red-500" }), /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }), /* @__PURE__ */ React.createElement("div", { className: "w-3 h-3 rounded-full bg-green-500" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(Terminal, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground" }, "script")), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", onClick: copyToClipboard, className: "hover:bg-muted" }, /* @__PURE__ */ React.createElement(Copy, { className: "h-4 w-4" }))), /* @__PURE__ */ React.createElement("div", { className: "overflow-x-auto" }, /* @__PURE__ */ React.createElement("pre", { className: "text-sm leading-relaxed" }, /* @__PURE__ */ React.createElement("code", { className: "text-foreground" }, "<", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, "script"), "\n", "  ", /* @__PURE__ */ React.createElement("span", { className: "text-amber-400" }, "defer"), "\n", "  ", /* @__PURE__ */ React.createElement("span", { className: "text-amber-400" }, "src"), "=", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, '"https://cdn.jsdelivr.net/gh/Bread-org', "\n", "    ", '/s16.games/embed.js"'), "\n", "  ", /* @__PURE__ */ React.createElement("span", { className: "text-amber-400" }, "data-api"), "=", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, '"https://bread-org.github.io/s16.games"'), "\n", "  ", /* @__PURE__ */ React.createElement("span", { className: "text-amber-400" }, "data-api2"), "=", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, '"https://bread-org.github.io/s16.chunk2"'), "\n", "  ", /* @__PURE__ */ React.createElement("span", { className: "text-amber-400" }, "data-target"), "=", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, '"#gameContainer"'), "></", /* @__PURE__ */ React.createElement("span", { className: "text-blue-400" }, "script"), ">")))))))));
}
__name(CodeSnippet, "CodeSnippet");


import { useState as useState5, useEffect as useEffect5 } from "react";
import { motion as motion6 } from "framer-motion";
import { Rocket } from "lucide-react";
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState5({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect5(() => {
    const targetDate = /* @__PURE__ */ new Date("2025-08-26T18:53:39.622Z");
    const timer = setInterval(() => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1e3 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
          minutes: Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60)),
          seconds: Math.floor(distance % (1e3 * 60) / 1e3)
        });
      }
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "py-16 relative" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 text-center" }, /* @__PURE__ */ React.createElement(motion6.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "max-w-3xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8" }, /* @__PURE__ */ React.createElement(motion6.div, { initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 } }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center mb-6" }, /* @__PURE__ */ React.createElement(Rocket, { className: "h-8 w-8 text-blue-500 mr-3" }), /* @__PURE__ */ React.createElement("h2", { className: "text-3xl md:text-4xl font-bold text-foreground" }, "Launch in:")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-4 gap-4 mb-8" }, [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ].map((item, index) => /* @__PURE__ */ React.createElement(motion6.div, { key: item.label, className: "bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4", whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400 } }, /* @__PURE__ */ React.createElement(motion6.div, { className: "text-3xl md:text-4xl font-bold text-foreground mb-2", key: item.value, initial: { scale: 1.2, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.3 } }, item.value.toString().padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-muted-foreground uppercase tracking-wider" }, item.label)))), /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement("span", null, ""))))))); // Se ha eliminado el componente Clock aquí
}
__name(CountdownTimer, "CountdownTimer");

import * as React10 from "react";
var Input = React10.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ React10.createElement(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

import { useState as useState6 } from "react";
import { motion as motion7, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { Search, ChevronDown as ChevronDown2, ChevronUp } from "lucide-react";
var GAMES_LIST = [
  "1",
  "10 Minutes Till Dawn",
  "100NG",
  "1v1 Space",
  "1v1.LOL",
  "2048",
  "2048 Multitask",
  "9007199254740992",
  "99 Balls",
  "A Dance of Fire and Ice",
  "A Dark Room",
  "Achievement Unlocked",
  "Adrenaline Challenge",
  "Adventure Drivers",
  "Ages of Conflict",
  "Align 4",
  "Alien Hominid",
  "Amazing Rope Police",
  "Amidst the Clouds",
  "Among Us",
  "Angel Under",
  "Angry Sharks",
  "Aquapark Slides",
  "Astray",
  "Avalanche",
  "Awesome Tanks 2",
  "Backrooms",
  "Backrooms 2D",
  "Bacon May Die",
  "Bad Ice Cream",
  "Bad Ice Cream 2",
  "Bad Ice Cream 3",
  "Bad Parenting",
  "Baldi's Basics",
  "Ball Dodge",
  "Ballistic Chickens",
  "Bank Robber",
  "Bank Robber 2",
  "Bank Robber 3",
  "Basket Bros IO",
  "Basket Random",
  "Basketball Stars",
  "Battle For Gondor",
  "Big Red Button",
  "Bike Obby",
  "BitLife",
  "Blachole Square",
  "Blade Ball",
  "Black Knight",
  "Blockpost",
  "Bloons TD",
  "Bloons TD 2",
  "Blockost",
  "BNTTS",
  "Bob The Robber 2",
  "Body Cam Shooter",
  "Bonk.io",
  "Boxhead 2 Play",
  "Boxing Random",
  "Brawl stars",
  "Breaking The Bank",
  "BTD4",
  "BTD5",
  "BTTS",
  "Buckshot Roulette",
  "Burger and Frights",
  "Bus and Subway",
  "CN Ping Pong",
  "CMM Client",
  "CS Deathmatch",
  "CS Parkour",
  "CSGO Clicker",
  "CTR",
  "CTR Holiday",
  "CTR TR",
  "Cannon Basketball 4",
  "Canyon Defense",
  "Cars Simulator",
  "Cell Machine",
  "Champion Archer",
  "Champion Island",
  "Checkers",
  "Chess",
  "Chill Radio",
  "Cho Cho Charles",
  "Chrome Dino",
  "Circlo",
  "ClassiCube",
  "Cluster Rush",
  "Connect 3",
  "Cookie Clicker",
  "Core Ball",
  "Craftmine",
  "Crazy Cars 3d",
  "Crazy cattle3d",
  "Creative Kill Chamber",
  "Crossy Road",
  "Cubefield",
  "Cupcake 2048",
  "Dante",
  "Deal or No Deal",
  "Death Rails",
  "Death Run 3D",
  "Deepest Sword",
  "Defend The Tank",
  "Doctor Acorn 2",
  "Dodge",
  "Doge 2048",
  "Doge Miner",
  "Doge Miner 2",
  "Doom",
  "Doomori",
  "Doodle Jump",
  "Double Wires",
  "Dragon vs Bricks",
  "Draw The Hill",
  "Drift Boss",
  "Drift Hunters",
  "Drive Mad",
  "Duck Life 1",
  "Duck Life 2",
  "Duck Life 3",
  "Duck Life 4",
  "Duke Nukem 2",
  "Dumb Ways To Die",
  "Eagler Faithful",
  "Eagler JP",
  "Eaglercraft",
  "Earn To Die",
  "Edge Not Found",
  "Edge Surf",
  "Eel Slap",
  "Eggy Car",
  "Elastic Man",
  "Endless War 3",
  "Escaping The Prison",
  "Evil Glitch",
  "Evolution",
  "Exo",
  "Factory Balls",
  "Fair Squares",
  "Fake Virus",
  "Fancy Pants Adventures",
  "Fantasy Dash",
  "Fireboy Watergirl Forest Temple",
  "Flappy 2048",
  "Flappy Bird",
  "Flappy Plane",
  "Flash Tetris",
  "Fleeing The Complex",
  "Flippy Fish",
  "FNAW",
  "Friday Night Funkin",
  "Froggys Battle",
  "Fruit Ninja",
  "Frying Nemo",
  "FSUCraft",
  "FUClient",
  "Gacha Life",
  "Game Inside",
  "GDTD",
  "Gears Of Babies",
  "Generic Fishing Game",
  "Geo Challenge",
  "Geo Dash",
  "Geo Dash Lite",
  "Geo Geo",
  "Geo Jump",
  "Geo Neon Dash",
  "Geo PS1",
  "Geo Rash",
  "George And The Printer",
  "Geo Trash",
  "Getaway Shootout",
  "Gimme The Airpod",
  "Glass City",
  "GMonster",
  "Go Ball",
  "Goodnight",
  "Goodnight Meowmie",
  "Google Feud",
  "Google Snake",
  "Gravity Soccer",
  "Greybox",
  "Grindcraft",
  "Grow A Garden",
  "Hacker Type",
  "Handshakes",
  "Happy Hop",
  "Happy Wheels",
  "Hardware Tycoon",
  "HBA",
  "Helicopter",
  "Hellscaper",
  "Hex Empire",
  "HexGL",
  "Hextris",
  "Highrise Hop",
  "Hill Climb Racing",
  "Horror Among Us",
  "Hungry Lamu",
  "Ice Age Baby",
  "Ice Age Baby 2",
  "Idle Breakout",
  "Idle Dice",
  "Idle Dices",
  "Idle Factory Empire",
  "Idle Hotel Empire",
  "Idle Hypermart Empire",
  "Idle Megamall Empire",
  "Idle Mining Empire",
  "Idle Mole Empire",
  "Idle Shark",
  "Idle Town Billionaire",
  "Impossible Quiz",
  "Interactive Buddy",
  "Invite The Blackbird",
  "Iron Dash",
  "Jetpack Joyride",
  "JS",
  "Just Fall",
  "Just One Boss",
  "Kirka.io",
  "Kitchen Gun Game",
  "Kitten Cannon",
  "Knife Master",
  "Krunker",
  "Learn To Fly",
  "Learn To Fly 2",
  "Legacy Flash Games",
  "Level 13",
  "Line Rider",
  "LTF3",
  "LTF Idle",
  "Madalin Stunt Cars 2",
  "Madalin Stunt Cars 3",
  "Mario",
  "Mart",
  "Marvin Spectrum",
  "Matrix Rampage",
  "MC2D",
  "MCJE",
  "Meme 2048",
  "Merge Round Racers",
  "Mindustry",
  "Mineblocks",
  "Minecraft 1.5",
  "Minecraft 1.8",
  "Minecraft Beta",
  "Minecraft Classic",
  "Minecraft Tower Defence",
  "Minesweeper",
  "Mini Putt",
  "Missiles",
  "Monkey Mart",
  "Monster Tracks",
  "Moto X3M",
  "Moto X3M 2",
  "Moto X3M Pool",
  "Moto X3M Spooky",
  "Moto X3M Winter",
  "My Rusty Submarine",
  "N-Gon",
  "Ninja",
  "Ninja Vs Evil Corp",
  "Noob Steve Parkour",
  "NS Resurgence",
  "NS Shaft",
  "Observation Duty",
  "Offline Paradise",
  "OM Bounce",
  "OSU!",
  "Out Of Ctrl",
  "Overwatch",
  "Ovo",
  "Pandemic 2",
  "Papa's Burgeria",
  "Papa's Pizzaria",
  "Paper.io 2",
  "Papery Planes",
  "Particle Clicker",
  "PIClient",
  "Pigeon Ascent",
  "Pixel Gun Survival",
  "Planet Life",
  "Plants Vs Zombies 1",
  "Polybranch",
  "Polytrack OG",
  "Poom",
  "Popcat Classic",
  "Portal Flash",
  "Precision Client",
  "Protektor",
  "Push The Square",
  "Push Your Luck",
  "Rabbit Samurai",
  "Rabbit Samurai 2",
  "Rainbow FR",
  "Repo",
  "Rocket League",
  "Rolling Forests",
  "Run 2",
  "Shape Shootout",
  "Slope",
  "Slope 2",
  "Snow Rider 3D",
  "Spiderdude",
  "Starlink",
  "Stickman Survival",
  "Time Shooter 2",
  "Time Shooter 3",
  "Tomb of the Mask",
  "Trimps",
  "Tycoon Factory",
  "White Room",
  "Wordle"
];
function GamesList() {
  const [searchQuery, setSearchQuery] = useState6("");
  const [isExpanded, setIsExpanded] = useState6(false);
  const [gameCount, setGameCount] = useState6(316);
  const filteredGames = GAMES_LIST.filter((game) => game.toLowerCase().includes(searchQuery.toLowerCase()));
  const displayedGames = isExpanded ? filteredGames : filteredGames.slice(0, 20);
  useState6(() => {
    const timer = setTimeout(() => {
      const duration = 3e3;
      const startValue = 316;
      const endValue = GAMES_LIST.length;
      const increment = (endValue - startValue) / (duration / 50);
      let currentValue = startValue;
      const animationTimer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= endValue) {
          currentValue = endValue;
          clearInterval(animationTimer);
        }
        setGameCount(Math.floor(currentValue));
      }, 50);
      return () => clearInterval(animationTimer);
    }, 1e3);
    return () => clearTimeout(timer);
  });
  const handleSearch = /* @__PURE__ */ __name(() => {
  }, "handleSearch");
  return /* @__PURE__ */ React.createElement("section", { id: "games", className: "py-16 relative" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4" }, /* @__PURE__ */ React.createElement(motion7.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground" }, "Browse ", gameCount, "+ Free Games"), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto" }, "From classic arcade games to modern hits, find the perfect games for your site")), /* @__PURE__ */ React.createElement(motion7.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, className: "mb-8 max-w-lg mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Search, { className: "absolute left-3 top-3 h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ React.createElement(
    Input,
    {
      placeholder: "Search games...",
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      className: "pl-10 pr-20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-slate-200/50 dark:border-slate-700/50 h-12 shadow-lg"
    }
  ), /* @__PURE__ */ React.createElement(Button, { size: "sm", className: "absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white", onClick: handleSearch }, "Search"))), /* @__PURE__ */ React.createElement(motion7.div, { initial: { y: 30, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, className: "max-w-4xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/50" }, displayedGames.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: `grid gap-3 ${searchQuery ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(displayedGames.length, 3)}` : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}` }, /* @__PURE__ */ React.createElement(AnimatePresence2, { mode: "wait" }, displayedGames.map((game, index) => /* @__PURE__ */ React.createElement(
    motion7.div,
    {
      key: game,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.1, delay: index * 0.01 },
      className: "group"
    },
    /* @__PURE__ */ React.createElement("div", { className: "p-3 rounded-lg hover:bg-muted/50 transition-all duration-150 cursor-pointer border border-transparent hover:border-border/50 backdrop-blur-sm" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm text-foreground truncate" }, game))
  )))) : /* @__PURE__ */ React.createElement("div", { className: "text-center py-8" }, /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground" }, 'No games found matching "', searchQuery, '"')), filteredGames.length > 20 && !searchQuery && /* @__PURE__ */ React.createElement("div", { className: "text-center mt-6 pt-6 border-t border-border/50" }, /* @__PURE__ */ React.createElement(Button, { onClick: () => setIsExpanded(!isExpanded), variant: "outline", className: "border-border/50 hover:border-blue-400 hover:text-blue-400" }, isExpanded ? /* @__PURE__ */ React.createElement(React.Fragment, null, "Show Less ", /* @__PURE__ */ React.createElement(ChevronUp, { className: "ml-2 h-4 w-4" })) : /* @__PURE__ */ React.createElement(React.Fragment, null, "Show All ", filteredGames.length, " Games ", /* @__PURE__ */ React.createElement(ChevronDown2, { className: "ml-2 h-4 w-4" }))))))));
}
__name(GamesList, "GamesList");

import { motion as motion8 } from "framer-motion";
import { Zap as Zap2, Shield as Shield2, Globe as Globe2, Code, Server, Users } from "lucide-react";
var features = [
  {
    icon: Zap2,
    title: "Multiple API options",
    description: "Uses jsDelivr, GitHub Raw, and GitHub Pages for maximum reliability and speed to ensure its never blocked."
  },
  {
    icon: Shield2,
    title: "Always Available",
    description: "Multiple cdns: Ensures your games stay online even if one CDN goes down."
  },
  {
    icon: Globe2,
    title: "Global Distribution",
    description: "Fast loading times worldwide thanks to distributed CDN networks."
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Single script tag integration (modifying embed.js for your proxy is hightly recomended as embed.js only contains the main logic)"
  },
  {
    icon: Server,
    title: "No server requiered",
    description: "No vps or server required. Just play."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source project with games created by the community."
  }
];
function Features() {
  return /* @__PURE__ */ React.createElement("section", { className: "py-16 relative" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4" }, /* @__PURE__ */ React.createElement(motion8.div, { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "text-center mb-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-foreground" }, "Why Choose s16.games?"), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto" }, "Built for developers who need reliable, fast, and easy-to-use game hosting")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, features.map((feature, index) => /* @__PURE__ */ React.createElement(
    motion8.div,
    {
      key: feature.title,
      initial: { y: 50, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.6, delay: index * 0.1 },
      whileHover: {
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400 }
      },
      className: "group"
    },
    /* @__PURE__ */ React.createElement("div", { className: "bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-border/70 shadow-xl shadow-slate-900/5 dark:shadow-slate-900/25" }, /* @__PURE__ */ React.createElement("div", { className: "w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm" }, /* @__PURE__ */ React.createElement(feature.icon, { className: "h-7 w-7 text-blue-500" })), /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold text-foreground mb-4 group-hover:text-blue-500 transition-colors" }, feature.title), /* @__PURE__ */ React.createElement("p", { className: "text-muted-foreground leading-relaxed" }, feature.description))
  )))));
}
__name(Features, "Features");

function App() {
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-background text-foreground transition-colors duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" }), /* @__PURE__ */ React.createElement("div", { className: "relative z-10" }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(CodeSnippet, null), /* @__PURE__ */ React.createElement(CountdownTimer, null), /* @__PURE__ */ React.createElement(GamesList, null), /* @__PURE__ */ React.createElement(Features, null))));
}
__name(App, "App");

// <stdin>
import { createRoot as createRoot2 } from "react-dom/client";
import * as oldReactQuery from "https://esm.sh/react-query?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
import * as newReactQuery from "https://esm.sh/@tanstack/react-query?target=es2020&alias=assert:node-stdlib-browser/proxy/assert,buffer:node-stdlib-browser/proxy/buffer,child_process:node-stdlib-browser/proxy/child_process,cluster:node-stdlib-browser/proxy/cluster,console:node-stdlib-browser/proxy/console,constants:node-stdlib-browser/proxy/constants,crypto:node-stdlib-browser/proxy/crypto,dgram:node-stdlib-browser/proxy/dgram,dns:node-stdlib-browser/proxy/dns,domain:node-stdlib-browser/proxy/domain,events:node-stdlib-browser/proxy/events,fs:node-stdlib-browser/proxy/fs,http:node-stdlib-browser/proxy/http,https:node-stdlib-browser/proxy/https,http2:node-stdlib-browser/proxy/http2,module:node-stdlib-browser/proxy/module,net:node-stdlib-browser/proxy/net,os:node-stdlib-browser/proxy/os,path:node-stdlib-browser/proxy/path,punycode:node-stdlib-browser/proxy/punycode,process:node-stdlib-browser/proxy/process,querystring:node-stdlib-browser/proxy/querystring,readline:node-stdlib-browser/proxy/readline,repl:node-stdlib-browser/proxy/repl,stream:node-stdlib-browser/proxy/stream,_stream_duplex:node-stdlib-browser/proxy/_stream_duplex,_stream_passthrough:node-stdlib-browser/proxy/_stream_passthrough,_stream_readable:node-stdlib-browser/proxy/_stream_readable,_stream_transform:node-stdlib-browser/proxy/_stream_transform,_stream_writable:node-stdlib-browser/proxy/_stream_writable,string_decoder:node-stdlib-browser/proxy/string_decoder,sys:node-stdlib-browser/proxy/sys,timers/promises:node-stdlib-browser/proxy/timers/promises,timers:node-stdlib-browser/proxy/timers,tls:node-stdlib-browser/proxy/tls,tty:node-stdlib-browser/proxy/tty,url:node-stdlib-browser/proxy/url,util:node-stdlib-browser/proxy/util,vm:node-stdlib-browser/proxy/vm,zlib:node-stdlib-browser/proxy/zlib,node:assert:node-stdlib-browser/proxy/node:assert,node:buffer:node-stdlib-browser/proxy/node:buffer,node:child_process:node-stdlib-browser/proxy/node:child_process,node:cluster:node-stdlib-browser/proxy/node:cluster,node:console:node-stdlib-browser/proxy/node:console,node:constants:node-stdlib-browser/proxy/node:constants,node:crypto:node-stdlib-browser/proxy/node:crypto,node:dgram:node-stdlib-browser/proxy/node:dgram,node:dns:node-stdlib-browser/proxy/node:dns,node:domain:node-stdlib-browser/proxy/node:domain,node:events:node-stdlib-browser/proxy/node:events,node:fs:node-stdlib-browser/proxy/node:fs,node:http:node-stdlib-browser/proxy/node:http,node:https:node-stdlib-browser/proxy/node:https,node:http2:node-stdlib-browser/proxy/node:http2,node:module:node-stdlib-browser/proxy/node:module,node:net:node-stdlib-browser/proxy/node:net,node:os:node-stdlib-browser/proxy/node:os,node:path:node-stdlib-browser/proxy/node:path,node:punycode:node-stdlib-browser/proxy/node:punycode,node:process:node-stdlib-browser/proxy/node:process,node:querystring:node-stdlib-browser/proxy/node:querystring,node:readline:node-stdlib-browser/proxy/node:readline,node:repl:node-stdlib-browser/proxy/node:repl,node:stream:node-stdlib-browser/proxy/node:stream,node:_stream_duplex:node-stdlib-browser/proxy/node:_stream_duplex,node:_stream_passthrough:node-stdlib-browser/proxy/node:_stream_passthrough,node:_stream_readable:node-stdlib-browser/proxy/node:_stream_readable,node:_stream_transform:node-stdlib-browser/proxy/node:_stream_transform,node:_stream_writable:node-stdlib-browser/proxy/node:_stream_writable,node:string_decoder:node-stdlib-browser/proxy/node:string_decoder,node:sys:node-stdlib-browser/proxy/node:sys,node:timers/promises:node-stdlib-browser/proxy/node:timers/promises,node:timers:node-stdlib-browser/proxy/node:timers,node:tls:node-stdlib-browser/proxy/node:tls,node:tty:node-stdlib-browser/proxy/node:tty,node:url:node-stdlib-browser/proxy/node:url,node:util:node-stdlib-browser/proxy/node:util,node:vm:node-stdlib-browser/proxy/node:vm,node:zlib:node-stdlib-browser/proxy/node:zlib&external=react,react-dom,lucide-react,@react-three/fiber,framer-motion,three,react-markdown,react-day-picker&dev";
var root = document.getElementById("root");
var renderRoot = createRoot2(root);
var oldQueryClient = new oldReactQuery.QueryClient();
var newQueryClient = new newReactQuery.QueryClient();
renderRoot.render(
  /* @__PURE__ */ react_default.createElement(ErrorBoundaryWrapper, null, /* @__PURE__ */ react_default.createElement(oldReactQuery.QueryClientProvider, { client: oldQueryClient }, /* @__PURE__ */ react_default.createElement(newReactQuery.QueryClientProvider, { client: newQueryClient }, /* @__PURE__ */ react_default.createElement(App, null), /* @__PURE__ */ react_default.createElement(Toaster, null))))
);
document.body.setAttribute("loaded", "true");
