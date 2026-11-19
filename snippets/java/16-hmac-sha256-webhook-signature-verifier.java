Mac mac = Mac.getInstance("HmacSHA256");
mac.init(new SecretKeySpec(secret.getBytes(UTF_8), "HmacSHA256"));
byte[] digest = mac.doFinal(payload.getBytes(UTF_8));
return MessageDigest.isEqual(expectedBytes, digest);