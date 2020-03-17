var pt_PT = {};
export { pt_PT };
pt_PT.title = "Portuguese (Portugal)";
pt_PT.address = await import("./address/mod.js");
pt_PT.internet = await import("./internet/mod.js");
pt_PT.name = await import("./name/mod.js");
pt_PT.phone_number = await import("./phone_number/mod.js");
pt_PT.cell_phone = await import("./cell_phone/mod.js");
pt_PT.commerce = await import("./commerce/mod.js");
pt_PT.date = await import("./date/mod.js");