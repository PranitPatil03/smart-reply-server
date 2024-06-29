import { DecodedIdToken, EmailData } from "./types";

export const email: EmailData[] = [
  {
    id: "1905ea8a629148bb",
    threadId: "1905ea8a629148bb",
    labelIds: ["UNREAD", "CATEGORY_UPDATES", "INBOX"],
    snippet:
      "smart-reply was granted access to your Google account taarakmehta.fire@gmail.com If you did not grant access, you should check this activity and secure your account. Check activity You can also see",
    payload: {
      partId: "",
      mimeType: "multipart/alternative",
      filename: "",
      headers: [
        {
          name: "Delivered-To",
          value: "taarakmehta.fire@gmail.com",
        },
        {
          name: "Received",
          value:
            "by 2002:a05:6f02:649a:b0:6e:1a53:2818 with SMTP id q26csp195996rce;        Fri, 28 Jun 2024 04:43:50 -0700 (PDT)",
        },
        {
          name: "X-Received",
          value:
            "by 2002:a05:6808:1241:b0:3d2:1759:7db0 with SMTP id 5614622812f47-3d543b1459dmr18579285b6e.35.1719575029773;        Fri, 28 Jun 2024 04:43:49 -0700 (PDT)",
        },
        {
          name: "ARC-Seal",
          value:
            "i=1; a=rsa-sha256; t=1719575029; cv=none;        d=google.com; s=arc-20160816;        b=TQJk7oa9lm5kd/8NEQQRTPVy9kDB15p+2aSN4hE0FJCAi1JujJ08AUAnTE+qfbVduy         cWfPMolxSI9iZe6drPxH4k4DAtgrw0ENT6xYymPZIejU6GXP3NNJNrroKNvw2mW6a/CJ         IBPl8nFXxk7q6A92Z/4sqUiWXD4XthoqMAE1W8IqTx+0PIS6iJawMwulY1Ts48Z94mU5         NKbsLDYvIm0MLgtQSQFcObzSYqxh59bykQngw4lR0DraL868mKpCNtIDcxVVbQ6H0A76         B80KjxPdGAY0Os9bVASgcGiosh7+Xq97EJYsOxNXfzb5zzYuXpldG0j+RwjD7y9IvTZl         TikQ==",
        },
        {
          name: "ARC-Message-Signature",
          value:
            "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:from:subject:message-id:feedback-id:date:mime-version         :dkim-signature;        bh=C1rbF+/ojsgGZOp6Dmx9p3x/9eBXTVH+IcLlfOZDX5M=;        fh=PN2cjP+TLioSGBGBkYx86g9TLN1sEfmwdJpCGf7Jg6c=;        b=lj/x2pPjRw6yfVUlUZgfstNn/YNvcCnp0SRgRkVaEMdMTTAnlVQcDPQjTZChfqmrsC         JcadwtNKT6jaaevJKeF6Ol3z6PJne8Y/rCNgjpsA8+vT5JbYVs3ySn8UF/KdOkoc2K5U         Cw6TZiy47Wh8pgGlCyFEzaIEfVDrb4Ip04NviPkvnzzub1CJGqix58v+YY+iJV5tsYfm         cNj6Eqp5QG5m4/4tsfuuAXyXvBD/Jtumz5Yalv0Kv8X5F1FjnWzdIJv/GFI29uab2IpK         tw79dE8YBCshOzH6DmXe5C9ZPR5WGSsWfc3gCAKFAMpm/9b3MCjKIeodsogGxKwb2OdT         /2Pw==;        dara=google.com",
        },
        {
          name: "ARC-Authentication-Results",
          value:
            "i=1; mx.google.com;       dkim=pass header.i=@accounts.google.com header.s=20230601 header.b=cLreCSRB;       spf=pass (google.com: domain of 39af-zggtag4za-dqbxkmooagzfe.saasxq.oay@gaia.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=39aF-ZggTAG4Za-dQbXkMOOagZfe.SaaSXQ.OaY@gaia.bounces.google.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=accounts.google.com;       dara=pass header.i=@gmail.com",
        },
        {
          name: "Return-Path",
          value:
            "<39aF-ZggTAG4Za-dQbXkMOOagZfe.SaaSXQ.OaY@gaia.bounces.google.com>",
        },
        {
          name: "Received",
          value:
            "from mail-sor-f73.google.com (mail-sor-f73.google.com. [209.85.220.73])        by mx.google.com with SMTPS id 5614622812f47-3d5676019cfsor1582227b6e.0.2024.06.28.04.43.49        for <taarakmehta.fire@gmail.com>        (Google Transport Security);        Fri, 28 Jun 2024 04:43:49 -0700 (PDT)",
        },
        {
          name: "Received-SPF",
          value:
            "pass (google.com: domain of 39af-zggtag4za-dqbxkmooagzfe.saasxq.oay@gaia.bounces.google.com designates 209.85.220.73 as permitted sender) client-ip=209.85.220.73;",
        },
        {
          name: "Authentication-Results",
          value:
            "mx.google.com;       dkim=pass header.i=@accounts.google.com header.s=20230601 header.b=cLreCSRB;       spf=pass (google.com: domain of 39af-zggtag4za-dqbxkmooagzfe.saasxq.oay@gaia.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=39aF-ZggTAG4Za-dQbXkMOOagZfe.SaaSXQ.OaY@gaia.bounces.google.com;       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=accounts.google.com;       dara=pass header.i=@gmail.com",
        },
        {
          name: "DKIM-Signature",
          value:
            "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=accounts.google.com; s=20230601; t=1719575029; x=1720179829; dara=google.com;        h=to:from:subject:message-id:feedback-id:date:mime-version:from:to:cc         :subject:date:message-id:reply-to;        bh=C1rbF+/ojsgGZOp6Dmx9p3x/9eBXTVH+IcLlfOZDX5M=;        b=cLreCSRBifxgp3sDbs64DgKQekGna0pi21dKfwKlbkxshNhgDcYXYQfp1u6RtmbA28         6WISFTf+d/YJjo6Drl0gaaCZXav5VoL9rYERi75cvCqGPTQf6k/hEAnYbUmtyWmQeO9/         cFNMGO8ApJB/HlgxFVlVvM/g29/uHxWITLKT3yHETI6Hm3XrqfQc96ga+Dwx/76aexej         OLejG9ko/tBIpnJtZZdhj/sCaUv5VfnMyUxRzNZfaQX779p2BWr/Pk7wsCxDwxg9nzYT         NhonDfoOMLKR1Jt8HpyW5ghqB+OXacV0Il/ShaOhpSwxia1FxmddWWX1dotWFFNpvREf         fSLw==",
        },
        {
          name: "X-Google-DKIM-Signature",
          value:
            "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20230601; t=1719575029; x=1720179829;        h=to:from:subject:message-id:feedback-id:date:mime-version         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;        bh=C1rbF+/ojsgGZOp6Dmx9p3x/9eBXTVH+IcLlfOZDX5M=;        b=k3KUxkAj+N353tiTwijw18srzwEgRbVFi3J3HDdb8HJydJTYeOdYeT6+KFzFCr8Tpl         raldE96GzoptfZzEWzm+na8+Dc6A1nuNoLnhlrtwBi29Vyk5fH9mkZ8Nnym/KXTQvDl9         sWYv0lVcl5lJF9neXDSQd2NjSa2TZ/c/MbJFqWnsTPWemoNg1ua0VXtK4hFzu0abT3OU         MFIeQHPkBaGD60BW353Y1++7KsV4UYzMjhdlju5rgOELDIIK2pNvyUPYOUqMFRsku1It         vvIeK+0uXg5LXMzQioYk39eNOSD4uQ3U9Z4smIaPvk1wv8kWs35La1y1CkzEjYCoG2TS         K9ig==",
        },
        {
          name: "X-Gm-Message-State",
          value:
            "AOJu0Yzn4loe+qaDfI5TKbbfuSGU8izou8UjQOIEOKbnJqCABGZtHChB JAULUCI5RpSIR1fRkUSUxEYMR9vRrdW4u3MRs9wFZ62taIwFcgGlxCg82/ODD7hO8qAnNZpbRrj SjwQWgO5wkXGHrzwh4RBVP/MYLgbLDZuU6Os=",
        },
        {
          name: "X-Google-Smtp-Source",
          value:
            "AGHT+IEusckP27+HQXemkxq2E3LWFwQPtk7vkhVMKxJPzCzIHcXS6AONfMqxHjhOp1lJlbROjQEM4rMCrUleeq5OsqHrDA==",
        },
        {
          name: "MIME-Version",
          value: "1.0",
        },
        {
          name: "X-Received",
          value:
            "by 2002:a05:6808:144c:b0:3d6:2dc9:3d1 with SMTP id 5614622812f47-3d62dc90a7bmr3730189b6e.2.1719575029273; Fri, 28 Jun 2024 04:43:49 -0700 (PDT)",
        },
        {
          name: "Date",
          value: "Fri, 28 Jun 2024 11:43:48 GMT",
        },
        {
          name: "X-Account-Notification-Type",
          value: "127",
        },
        {
          name: "Feedback-ID",
          value: "127:account-notifier",
        },
        {
          name: "X-Notifications",
          value: "474519fff56c0000",
        },
        {
          name: "X-Notifications-Bounce-Info",
          value:
            "AU8pKH17lMLa1fi1qsCWrbNk_mMzVPWeg98j-DkqZvjC1nEvt0GdNZh3xoD3_WStjRJP78SE9c3RaSIwFGid9dOWl16sohHl-jVWvGPsFZjTsqLDR1JPouRcO7XCuCC6KO46uxzDuQo7Xl9WGoHt-0GPd3i0KKnI9lrA5A8tXAe9S687LklPOMSFO5p9QvjkdmNGFzrx_gZFwwkuIMJjZ-fgJOA9NjAwNjA0MDQxNTM1NTk2OTMzMg",
        },
        {
          name: "Message-ID",
          value: "<LEBVX3vDgCqMXX97HZobhQ@notifications.google.com>",
        },
        {
          name: "Subject",
          value: "Security alert",
        },
        {
          name: "From",
          value: "Google <no-reply@accounts.google.com>",
        },
        {
          name: "To",
          value: "taarakmehta.fire@gmail.com",
        },
        {
          name: "Content-Type",
          value:
            'multipart/alternative; boundary="000000000000c8d305061bf1c2dc"',
        },
      ],
      body: {
        size: 0,
      },
      parts: [
        {
          partId: "0",
          mimeType: "text/plain",
          filename: "",
          headers: [
            {
              name: "Content-Type",
              value: 'text/plain; charset="UTF-8"; format=flowed; delsp=yes',
            },
            {
              name: "Content-Transfer-Encoding",
              value: "base64",
            },
          ],
          body: {
            size: 670,
            data: "W2ltYWdlOiBHb29nbGVdDQpzbWFydC1yZXBseSB3YXMgZ3JhbnRlZCBhY2Nlc3MgdG8geW91ciBHb29nbGUgYWNjb3VudA0KDQoNCnRhYXJha21laHRhLmZpcmVAZ21haWwuY29tDQoNCklmIHlvdSBkaWQgbm90IGdyYW50IGFjY2VzcywgeW91IHNob3VsZCBjaGVjayB0aGlzIGFjdGl2aXR5IGFuZCBzZWN1cmUgeW91cg0KYWNjb3VudC4NCkNoZWNrIGFjdGl2aXR5DQo8aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL0FjY291bnRDaG9vc2VyP0VtYWlsPXRhYXJha21laHRhLmZpcmVAZ21haWwuY29tJmNvbnRpbnVlPWh0dHBzOi8vbXlhY2NvdW50Lmdvb2dsZS5jb20vYWxlcnQvbnQvMTcxOTU3NTAyODAwMD9yZm4lM0QxMjclMjZyZm5jJTNEMSUyNmVpZCUzRDEyMzcyMTQyNzM5OTg3ODE3NjAlMjZldCUzRDA-DQpZb3UgY2FuIGFsc28gc2VlIHNlY3VyaXR5IGFjdGl2aXR5IGF0DQpodHRwczovL215YWNjb3VudC5nb29nbGUuY29tL25vdGlmaWNhdGlvbnMNCllvdSByZWNlaXZlZCB0aGlzIGVtYWlsIHRvIGxldCB5b3Uga25vdyBhYm91dCBpbXBvcnRhbnQgY2hhbmdlcyB0byB5b3VyDQpHb29nbGUgQWNjb3VudCBhbmQgc2VydmljZXMuDQrCqSAyMDI0IEdvb2dsZSBMTEMsIDE2MDAgQW1waGl0aGVhdHJlIFBhcmt3YXksIE1vdW50YWluIFZpZXcsIENBIDk0MDQzLCBVU0ENCg==",
          },
        },
        {
          partId: "1",
          mimeType: "text/html",
          filename: "",
          headers: [
            {
              name: "Content-Type",
              value: 'text/html; charset="UTF-8"',
            },
            {
              name: "Content-Transfer-Encoding",
              value: "quoted-printable",
            },
          ],
          body: {
            size: 4718,
            data: "PCFET0NUWVBFIGh0bWw-PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIG5hbWU9ImZvcm1hdC1kZXRlY3Rpb24iIGNvbnRlbnQ9ImVtYWlsPW5vIi8-PG1ldGEgbmFtZT0iZm9ybWF0LWRldGVjdGlvbiIgY29udGVudD0iZGF0ZT1ubyIvPjxzdHlsZSBub25jZT0iZkdBU0czeWFzb2ZIRnVNX25UV3Q3USI-LmF3bCBhIHtjb2xvcjogI0ZGRkZGRjsgdGV4dC1kZWNvcmF0aW9uOiBub25lO30gLmFibWwgYSB7Y29sb3I6ICMwMDAwMDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8tTWVkaXVtLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDsgdGV4dC1kZWNvcmF0aW9uOiBub25lO30gLmFkZ2wgYSB7Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9IC5hZmFsIGEge2NvbG9yOiAjYjBiMGIwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7fSBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgey52MnNwIHtwYWRkaW5nOiA2cHggMzBweCAwcHg7fSAudjJyc3Age3BhZGRpbmc6IDBweCAxMHB4O319IEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7Lm1kdjJydyB7cGFkZGluZzogNDBweCA0MHB4O319IDwvc3R5bGU-PGxpbmsgaHJlZj0iLy9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PUdvb2dsZStTYW5zIiByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIiBub25jZT0iZkdBU0czeWFzb2ZIRnVNX25UV3Q3USIvPjwvaGVhZD48Ym9keSBzdHlsZT0ibWFyZ2luOiAwOyBwYWRkaW5nOiAwOyIgYmdjb2xvcj0iI0ZGRkZGRiI-PHRhYmxlIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJtaW4td2lkdGg6IDM0OHB4OyIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIGxhbmc9ImVuIj48dHIgaGVpZ2h0PSIzMiIgc3R5bGU9ImhlaWdodDogMzJweDsiPjx0ZD48L3RkPjwvdHI-PHRyIGFsaWduPSJjZW50ZXIiPjx0ZD48ZGl2IGl0ZW1zY29wZSBpdGVtdHlwZT0iLy9zY2hlbWEub3JnL0VtYWlsTWVzc2FnZSI-PGRpdiBpdGVtcHJvcD0iYWN0aW9uIiBpdGVtc2NvcGUgaXRlbXR5cGU9Ii8vc2NoZW1hLm9yZy9WaWV3QWN0aW9uIj48bGluayBpdGVtcHJvcD0idXJsIiBocmVmPSJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vQWNjb3VudENob29zZXI_RW1haWw9dGFhcmFrbWVodGEuZmlyZUBnbWFpbC5jb20mYW1wO2NvbnRpbnVlPWh0dHBzOi8vbXlhY2NvdW50Lmdvb2dsZS5jb20vYWxlcnQvbnQvMTcxOTU3NTAyODAwMD9yZm4lM0QxMjclMjZyZm5jJTNEMSUyNmVpZCUzRDEyMzcyMTQyNzM5OTg3ODE3NjAlMjZldCUzRDAiLz48bWV0YSBpdGVtcHJvcD0ibmFtZSIgY29udGVudD0iUmV2aWV3IEFjdGl2aXR5Ii8-PC9kaXY-PC9kaXY-PHRhYmxlIGJvcmRlcj0iMCIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIiBzdHlsZT0icGFkZGluZy1ib3R0b206IDIwcHg7IG1heC13aWR0aDogNTE2cHg7IG1pbi13aWR0aDogMjIwcHg7Ij48dHI-PHRkIHdpZHRoPSI4IiBzdHlsZT0id2lkdGg6IDhweDsiPjwvdGQ-PHRkPjxkaXYgc3R5bGU9ImJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci13aWR0aDogdGhpbjsgYm9yZGVyLWNvbG9yOiNkYWRjZTA7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogNDBweCAyMHB4OyIgYWxpZ249ImNlbnRlciIgY2xhc3M9Im1kdjJydyI-PGltZyBzcmM9Imh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ltYWdlcy9icmFuZGluZy9nb29nbGVsb2dvLzJ4L2dvb2dsZWxvZ29fY29sb3JfNzR4MjRkcC5wbmciIHdpZHRoPSI3NCIgaGVpZ2h0PSIyNCIgYXJpYS1oaWRkZW49InRydWUiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxNnB4OyIgYWx0PSJHb29nbGUiPjxkaXYgc3R5bGU9ImZvbnQtZmFtaWx5OiAmIzM5O0dvb2dsZSBTYW5zJiMzOTssUm9ib3RvLFJvYm90b0RyYWZ0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2JvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2RhZGNlMDsgY29sb3I6IHJnYmEoMCwwLDAsMC44Nyk7IGxpbmUtaGVpZ2h0OiAzMnB4OyBwYWRkaW5nLWJvdHRvbTogMjRweDt0ZXh0LWFsaWduOiBjZW50ZXI7IHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7Ij48ZGl2IHN0eWxlPSJmb250LXNpemU6IDI0cHg7Ij48YT5zbWFydC1yZXBseTwvYT4gd2FzIGdyYW50ZWQgYWNjZXNzIHRvIHlvdXIgR29vZ2xlJm5ic3A7YWNjb3VudCA8L2Rpdj48dGFibGUgYWxpZ249ImNlbnRlciIgc3R5bGU9Im1hcmdpbi10b3A6OHB4OyI-PHRyIHN0eWxlPSJsaW5lLWhlaWdodDogbm9ybWFsOyI-PHRkIGFsaWduPSJyaWdodCIgc3R5bGU9InBhZGRpbmctcmlnaHQ6OHB4OyI-PGltZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHN0eWxlPSJ3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyB2ZXJ0aWNhbC1hbGlnbjogc3ViOyBib3JkZXItcmFkaXVzOiA1MCU7OyIgc3JjPSJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJVFcxaWVXNUI3LXFlaFRreXFhLVItc2FIZXBRamQ3b2VtWV9tUUpFdnVBQmR3a1E9czk2LWMiIGFsdD0iIj48L3RkPjx0ZD48YSBzdHlsZT0iZm9udC1mYW1pbHk6ICYjMzk7R29vZ2xlIFNhbnMmIzM5OyxSb2JvdG8sUm9ib3RvRHJhZnQsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Y29sb3I6IHJnYmEoMCwwLDAsMC44Nyk7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDIwcHg7Ij50YWFyYWttZWh0YS5maXJlQGdtYWlsLmNvbTwvYT48L3RkPjwvdHI-PC90YWJsZT4gPC9kaXY-PGRpdiBzdHlsZT0iZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiByZ2JhKDAsMCwwLDAuODcpOyBsaW5lLWhlaWdodDogMjBweDtwYWRkaW5nLXRvcDogMjBweDsgdGV4dC1hbGlnbjogbGVmdDsiPjxicj5JZiB5b3UgZGlkIG5vdCBncmFudCBhY2Nlc3MsIHlvdSBzaG91bGQgY2hlY2sgdGhpcyBhY3Rpdml0eSBhbmQgc2VjdXJlIHlvdXIgYWNjb3VudC48ZGl2IHN0eWxlPSJwYWRkaW5nLXRvcDogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyI-PGEgaHJlZj0iaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL0FjY291bnRDaG9vc2VyP0VtYWlsPXRhYXJha21laHRhLmZpcmVAZ21haWwuY29tJmFtcDtjb250aW51ZT1odHRwczovL215YWNjb3VudC5nb29nbGUuY29tL2FsZXJ0L250LzE3MTk1NzUwMjgwMDA_cmZuJTNEMTI3JTI2cmZuYyUzRDElMjZlaWQlM0QxMjM3MjE0MjczOTk4NzgxNzYwJTI2ZXQlM0QwIiB0YXJnZXQ9Il9ibGFuayIgbGluay1pZD0ibWFpbi1idXR0b24tbGluayIgc3R5bGU9ImZvbnQtZmFtaWx5OiAmIzM5O0dvb2dsZSBTYW5zJiMzOTssUm9ib3RvLFJvYm90b0RyYWZ0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmOyBsaW5lLWhlaWdodDogMTZweDsgY29sb3I6ICNmZmZmZmY7IGZvbnQtd2VpZ2h0OiA0MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtmb250LXNpemU6IDE0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzogMTBweCAyNHB4O2JhY2tncm91bmQtY29sb3I6ICM0MTg0RjM7IGJvcmRlci1yYWRpdXM6IDVweDsgbWluLXdpZHRoOiA5MHB4OyI-Q2hlY2sgYWN0aXZpdHk8L2E-PC9kaXY-PC9kaXY-PGRpdiBzdHlsZT0icGFkZGluZy10b3A6IDIwcHg7IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE2cHg7IGNvbG9yOiAjNWY2MzY4OyBsZXR0ZXItc3BhY2luZzogMC4zcHg7IHRleHQtYWxpZ246IGNlbnRlciI-WW91IGNhbiBhbHNvIHNlZSBzZWN1cml0eSBhY3Rpdml0eSBhdDxicj48YSBzdHlsZT0iY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7dGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyI-aHR0cHM6Ly9teWFjY291bnQuZ29vZ2xlLmNvbS9ub3RpZmljYXRpb25zPC9hPjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9InRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHN0eWxlPSJmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Y29sb3I6IHJnYmEoMCwwLDAsMC41NCk7IGZvbnQtc2l6ZTogMTFweDsgbGluZS1oZWlnaHQ6IDE4cHg7IHBhZGRpbmctdG9wOiAxMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2PllvdSByZWNlaXZlZCB0aGlzIGVtYWlsIHRvIGxldCB5b3Uga25vdyBhYm91dCBpbXBvcnRhbnQgY2hhbmdlcyB0byB5b3VyIEdvb2dsZSBBY2NvdW50IGFuZCBzZXJ2aWNlcy48L2Rpdj48ZGl2IHN0eWxlPSJkaXJlY3Rpb246IGx0cjsiPiZjb3B5OyAyMDI0IEdvb2dsZSBMTEMsIDxhIGNsYXNzPSJhZmFsIiBzdHlsZT0iZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2NvbG9yOiByZ2JhKDAsMCwwLDAuNTQpOyBmb250LXNpemU6IDExcHg7IGxpbmUtaGVpZ2h0OiAxOHB4OyBwYWRkaW5nLXRvcDogMTJweDsgdGV4dC1hbGlnbjogY2VudGVyOyI-MTYwMCBBbXBoaXRoZWF0cmUgUGFya3dheSwgTW91bnRhaW4gVmlldywgQ0EgOTQwNDMsIFVTQTwvYT48L2Rpdj48L2Rpdj48L2Rpdj48L3RkPjx0ZCB3aWR0aD0iOCIgc3R5bGU9IndpZHRoOiA4cHg7Ij48L3RkPjwvdHI-PC90YWJsZT48L3RkPjwvdHI-PHRyIGhlaWdodD0iMzIiIHN0eWxlPSJoZWlnaHQ6IDMycHg7Ij48dGQ-PC90ZD48L3RyPjwvdGFibGU-PC9ib2R5PjwvaHRtbD4=",
          },
        },
      ],
    },
    sizeEstimate: 12032,
    historyId: "53384",
    internalDate: "1719575028000",
  },
];

import { PrismaClient } from "@prisma/client";

import jwt, { JwtPayload } from "jsonwebtoken";

import { gmail_v1 } from "googleapis";
const prisma = new PrismaClient();

async function main() {
  const userId = "pranit.work.3112@gmail.com";

  await prisma.emailRef.deleteMany({
    where: {
      userId: userId,
    },
  });

  await prisma.email.deleteMany({
    where: {
      userId: userId,
    },
  });

  console.log("Incorrect data deleted successfully");
}

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

export const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

export function encrypt(value: string): string {
  if (!ENCRYPTION_KEY) {
    throw new Error("ENCRYPTION_KEY is not set");
  }
  const ciphertext = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
  return ciphertext;
}

export const UserEmail = (idToken: string) => {
  const decoded = jwt.decode(idToken) as DecodedIdToken | null;

  if (decoded) {
    const userEmail = decoded.email;
    const userName = `${decoded.given_name} ${decoded.family_name}`;

    console.log("User Email:", userEmail);
    console.log("User Name:", userName);
    return userEmail;
  } else {
    console.error("Failed to decode ID token");
  }
};

export const mapToEmailData = (message: gmail_v1.Schema$Message): EmailData => {
  return {
    id: message.id!,
    threadId: message.threadId!,
    labelIds: message.labelIds || [],
    snippet: message.snippet || "",
    payload: {
      headers: (message.payload?.headers || []).map((header) => ({
        name: header.name || "",
        value: header.value || "",
      })),
      parts: (message.payload?.parts || []).map((part) => ({
        partId: part.partId || "",
        mimeType: part.mimeType || "",
        filename: part.filename || "",
        headers: (part.headers || []).map((header) => ({
          name: header.name || "",
          value: header.value || "",
        })),
        body: {
          size: part.body?.size || 0,
          data: part.body?.data || "",
        },
      })),
      partId: "",
      mimeType: "",
      filename: "",
    },
    sizeEstimate: message.sizeEstimate || 0,
    internalDate: message.internalDate || "",
    historyId: message.historyId || "",
  };
};
