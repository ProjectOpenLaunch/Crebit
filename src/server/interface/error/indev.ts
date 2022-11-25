import { FastifyRequest, FastifyReply } from "fastify";

export function indev(req: FastifyRequest, reply: FastifyReply) {
  req.log.info("Request from "+req.ip.toString+" not handled because of attack")
  reply.statusCode = 418;
  reply.send(
    "Hi! User from : " +
      req.ip.toString +
      ".\r\n[Indev] The page you are Looking for is under construction.\r\n" +
      '"The coffee pot is under manufacturing and the teapot couldn\'t process your request."'
  );
}
