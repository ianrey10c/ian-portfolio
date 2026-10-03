import { readFile } from "node:fs/promises";
import path from "node:path";
import PDFDocument from "pdfkit";
import { experience, profile, testimonials, tools } from "@/lib/data";

export const dynamic = "force-static";

const ink = "#262d40";
const accent = "#c8371d";
const muted = "#5b6172";
const paper = "#f1ede4";
const rule = "#d5d0c4";

const page = { width: 595.28, height: 841.89 };
const sidebar = { width: 178, pad: 22 };
const main = { x: sidebar.width + 28, top: 42, bottom: page.height - 44 };
const mainWidth = page.width - main.x - 34;

export async function GET() {
  const photo = await readFile(path.join(process.cwd(), "public", "images", "my-picture-resume.jpg"));

  const doc = new PDFDocument({
    size: "A4",
    margin: 0,
    info: { Title: `${profile.name} - Resume`, Author: profile.name },
  });
  const chunks: Buffer[] = [];
  doc.on("data", (chunk: Buffer) => chunks.push(chunk));
  const finished = new Promise<Buffer>((resolve) => doc.on("end", () => resolve(Buffer.concat(chunks))));

  const paintSidebar = () => {
    doc.rect(0, 0, sidebar.width, page.height).fill(paper);
    doc.rect(0, 0, page.width, 6).fill(accent);
  };

  let y = main.top;

  const ensure = (height: number) => {
    if (y + height <= main.bottom) return;
    doc.addPage();
    paintSidebar();
    y = main.top;
  };

  const heading = (label: string) => {
    ensure(60);
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(ink).text(label.toUpperCase(), main.x, y, {
      width: mainWidth,
      characterSpacing: 1.6,
    });
    y = doc.y + 4;
    doc.moveTo(main.x, y).lineTo(main.x + mainWidth, y).lineWidth(0.8).strokeColor(ink).stroke();
    doc.moveTo(main.x, y).lineTo(main.x + 34, y).lineWidth(2).strokeColor(accent).stroke();
    y += 12;
  };

  const paragraph = (text: string, gap = 7) => {
    doc.font("Helvetica").fontSize(9.2);
    const height = doc.heightOfString(text, { width: mainWidth, lineGap: 2.2 });
    ensure(height);
    doc.fillColor(muted).text(text, main.x, y, { width: mainWidth, lineGap: 2.2, align: "justify" });
    y = doc.y + gap;
  };

  const bullet = (text: string) => {
    const indent = 11;
    doc.font("Helvetica").fontSize(9);
    const height = doc.heightOfString(text, { width: mainWidth - indent, lineGap: 2 });
    ensure(height);
    doc.circle(main.x + 2.5, y + 4.2, 1.5).fill(accent);
    doc.fillColor(muted).text(text, main.x + indent, y, { width: mainWidth - indent, lineGap: 2 });
    y = doc.y + 3.5;
  };

  paintSidebar();

  const radius = 50;
  const centerX = sidebar.width / 2;
  const centerY = 40 + radius;
  doc.circle(centerX, centerY, radius + 3).fill("#ffffff");
  doc.save();
  doc.circle(centerX, centerY, radius).clip();
  doc.image(photo, centerX - radius, centerY - radius, { width: radius * 2, height: radius * 2 });
  doc.restore();
  doc.circle(centerX, centerY, radius + 3).lineWidth(1).strokeColor(ink).stroke();

  let sideY = centerY + radius + 26;
  const sideWidth = sidebar.width - sidebar.pad * 2;

  const sideHeading = (label: string) => {
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(ink).text(label.toUpperCase(), sidebar.pad, sideY, {
      width: sideWidth,
      characterSpacing: 1.6,
    });
    sideY = doc.y + 4;
    doc.moveTo(sidebar.pad, sideY).lineTo(sidebar.pad + sideWidth, sideY).lineWidth(0.6).strokeColor(rule).stroke();
    doc.moveTo(sidebar.pad, sideY).lineTo(sidebar.pad + 22, sideY).lineWidth(1.6).strokeColor(accent).stroke();
    sideY += 10;
  };

  const sideLine = (label: string, value: string) => {
    doc.font("Helvetica-Bold").fontSize(6.8).fillColor(accent).text(label.toUpperCase(), sidebar.pad, sideY, {
      width: sideWidth,
      characterSpacing: 1,
    });
    doc.font("Helvetica").fontSize(8.6).fillColor(ink).text(value, sidebar.pad, doc.y + 1.5, { width: sideWidth });
    sideY = doc.y + 8;
  };

  sideHeading("Contact");
  sideLine("Phone", profile.phone);
  sideLine("Email", profile.email);
  sideLine("Location", profile.location);
  sideY += 8;

  sideHeading("Skills");
  doc.font("Helvetica").fontSize(8.6);
  for (const tool of tools) {
    doc.circle(sidebar.pad + 2, sideY + 4, 1.3).fill(accent);
    doc.fillColor(ink).text(tool, sidebar.pad + 10, sideY, { width: sideWidth - 10 });
    sideY = doc.y + 4.2;
  }
  sideY += 12;

  sideHeading("Languages");
  doc.font("Helvetica").fontSize(8.6);
  for (const language of profile.languages) {
    doc.circle(sidebar.pad + 2, sideY + 4, 1.3).fill(accent);
    doc.fillColor(ink).text(language, sidebar.pad + 10, sideY, { width: sideWidth - 10 });
    sideY = doc.y + 4.2;
  }

  doc.font("Helvetica-Bold").fontSize(25).fillColor(ink).text(profile.name.toUpperCase(), main.x, y, {
    width: mainWidth,
    characterSpacing: 0.6,
  });
  y = doc.y + 2;
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(accent).text(
    `${profile.role} · ${profile.focus}`.toUpperCase(),
    main.x,
    y,
    { width: mainWidth, characterSpacing: 1.4 }
  );
  y = doc.y + 22;

  heading("Profile");
  for (const text of profile.summary) paragraph(text);
  y += 10;

  heading("Work Experience");
  for (const job of experience) {
    ensure(64);
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor(ink).text(job.role, main.x, y, { width: mainWidth - 70 });
    const afterRole = doc.y;
    doc.font("Helvetica-Bold").fontSize(8.6).fillColor(accent).text(job.period, main.x, y + 1.5, {
      width: mainWidth,
      align: "right",
    });
    y = afterRole + 1.5;
    doc.font("Helvetica").fontSize(9).fillColor(muted).text(`Client: ${job.client}`, main.x, y, { width: mainWidth });
    y = doc.y + 6;
    for (const highlight of job.highlights) bullet(highlight);
    y += 11;
  }

  heading("Client Reviews");
  for (const review of testimonials) {
    const quote = `"${review.quote[review.quote.length - 1]}"`;
    doc.font("Helvetica-Oblique").fontSize(9.2);
    const height = doc.heightOfString(quote, { width: mainWidth, lineGap: 2.2 });
    ensure(height + 34);
    doc.fillColor(ink).text(quote, main.x, y, { width: mainWidth, lineGap: 2.2 });
    y = doc.y + 4;
    doc.font("Helvetica-Bold").fontSize(8.8).fillColor(ink).text(review.name, main.x, y, { width: mainWidth });
    doc.font("Helvetica").fontSize(8).fillColor(muted).text(review.title, main.x, doc.y + 1, { width: mainWidth });
    y = doc.y + 13;
  }

  doc.end();
  const pdf = await finished;

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Ian-Rey-Cordova-Resume.pdf"',
    },
  });
}
