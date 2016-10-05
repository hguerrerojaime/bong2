import { Component,Inject, OnInit } from '@angular/core';
import { TemplateResolver } from '@bong/core';

@Component({
    selector: 'tables-ctrl',
    templateUrl: TemplateResolver.resolve(TablesComponent,'app')
})
export class TablesComponent {
    
    private data = [
    {
		"id": "5E76A44C-0455-8EED-4E40-432E47AA2ECE",
		"name": "Olson, Brittany",
		"company": "Ut Ipsum Ac Company",
		"email": "et@nonegestasa.edu"
	},
	{
		"id": "A0F27F9A-2AE0-DF8B-436C-3D5113A52D93",
		"name": "Malone, Maryam",
		"company": "Cursus LLP",
		"email": "dui.Suspendisse@ut.net"
	},
	{
		"id": "D570197C-3F6C-40A4-A2FB-93093983E170",
		"name": "Hale, Malachi",
		"company": "Libero Company",
		"email": "erat.vitae.risus@ametrisusDonec.org"
	},
	{
		"id": "78106380-E594-282C-57A9-B28113F6AE99",
		"name": "Church, Vielka",
		"company": "Magnis Dis Parturient LLP",
		"email": "ac.turpis.egestas@augue.net"
	},
	{
		"id": "8CD8BDD7-A516-4792-DA24-2E85199C8F9F",
		"name": "Valencia, Orson",
		"company": "Curabitur Dictum Corp.",
		"email": "rutrum@sem.co.uk"
	},
	{
		"id": "AEF456BC-D18B-8E1F-4B8A-7DB9D5F93114",
		"name": "Rosa, Reed",
		"company": "Egestas Aliquam Fringilla LLP",
		"email": "velit.egestas@Donecnon.co.uk"
	},
	{
		"id": "C5744947-E9C7-5335-8648-007CB504143B",
		"name": "Wise, Kelsey",
		"company": "Conubia Nostra LLC",
		"email": "Integer@gravidamolestiearcu.ca"
	},
	{
		"id": "87E2BADF-1AC2-6C20-5023-C4C198E5B1E8",
		"name": "Best, Tyler",
		"company": "Risus Varius Orci Corporation",
		"email": "vel.nisl.Quisque@cursus.org"
	},
	{
		"id": "537A6492-B5B5-0DB7-5653-CEE8F589D717",
		"name": "Ford, Victoria",
		"company": "Morbi Quis Corp.",
		"email": "parturient.montes.nascetur@eratvelpede.ca"
	},
	{
		"id": "1D0B2042-E259-BCE6-93A8-CFD463432612",
		"name": "Hicks, Suki",
		"company": "Diam Duis Limited",
		"email": "feugiat@dictum.edu"
	},
	{
		"id": "798EFB44-8876-3546-A320-B20A526EEE86",
		"name": "Trevino, Camilla",
		"company": "Libero Foundation",
		"email": "a@Morbimetus.ca"
	},
	{
		"id": "151EB334-B66B-B4E0-AB4C-55D3E2B5ECB9",
		"name": "Blackburn, Allegra",
		"company": "Sit Amet Limited",
		"email": "velit.Aliquam.nisl@scelerisque.edu"
	},
	{
		"id": "B0A62460-D478-FA05-D1A9-1C67215DA820",
		"name": "James, Jasmine",
		"company": "Ipsum Suspendisse Non Company",
		"email": "vitae@mi.ca"
	},
	{
		"id": "08A0E794-0A78-68E8-F344-70BBCFE7CE90",
		"name": "Callahan, Abraham",
		"company": "Tincidunt LLC",
		"email": "facilisis.facilisis.magna@senectus.net"
	},
	{
		"id": "03E547FC-BFB0-1EAF-A7A0-0E371B072F70",
		"name": "Torres, Mark",
		"company": "Blandit Congue Company",
		"email": "nibh.lacinia@augueidante.com"
	},
	{
		"id": "96608D7A-44C9-F0E8-87B1-45B2D3FBFF01",
		"name": "Cherry, Silas",
		"company": "Nibh Vulputate Mauris Limited",
		"email": "mauris.sit@loremDonecelementum.ca"
	},
	{
		"id": "352A007B-2FA1-3875-D07B-466F9B28356F",
		"name": "Weeks, Dominic",
		"company": "Velit Cras Lorem Corp.",
		"email": "nunc.sed@ametloremsemper.com"
	},
	{
		"id": "DCB1CA44-5A14-DE70-983B-E76D3E4248D9",
		"name": "Boyle, Avram",
		"company": "Mollis Phasellus Ltd",
		"email": "non@Nulla.org"
	},
	{
		"id": "A8A7273B-27EA-1F00-1836-A414F375DAF9",
		"name": "Ball, Chava",
		"company": "Semper Consulting",
		"email": "nec.enim.Nunc@estac.edu"
	},
	{
		"id": "D27A368F-1D3A-D4F1-3E65-078DEE505C08",
		"name": "Blackburn, Paula",
		"company": "Neque Et Associates",
		"email": "vitae.aliquam@malesuada.org"
	},
	{
		"id": "C67976F1-9675-DC3F-D096-9A16B4C8E0C5",
		"name": "House, Aidan",
		"company": "Dolor Dolor Tempus LLP",
		"email": "sollicitudin.a@Integer.com"
	},
	{
		"id": "6A9A38A2-EA34-3FF0-2576-B7C18A97866D",
		"name": "Stafford, Jael",
		"company": "Cursus Et Consulting",
		"email": "consequat.enim.diam@gravida.ca"
	},
	{
		"id": "6058D247-712F-C9E0-1547-D0F1530F827F",
		"name": "Cohen, September",
		"company": "Accumsan Convallis Ante Industries",
		"email": "natoque.penatibus.et@etcommodo.edu"
	},
	{
		"id": "02A963FA-D5B4-9541-D576-73ACB67773D5",
		"name": "Mccray, Price",
		"company": "Nisl Sem Incorporated",
		"email": "volutpat.nunc.sit@leoinlobortis.org"
	},
	{
		"id": "0A98F3DC-83E6-9437-8256-6FFF2B12EAB4",
		"name": "Burns, Zia",
		"company": "Dui Fusce Consulting",
		"email": "rutrum.Fusce@Proinvel.edu"
	},
	{
		"id": "B16672F7-CBA6-82D2-36A0-6B1A8F7A4D3F",
		"name": "Stark, Shelley",
		"company": "Ac Institute",
		"email": "tristique@et.ca"
	},
	{
		"id": "119F21B8-3D4F-BEDE-53B1-C4BF773A8E64",
		"name": "Slater, Darrel",
		"company": "Mauris Blandit Consulting",
		"email": "ut.erat.Sed@Fuscemollis.org"
	},
	{
		"id": "0976E86B-298E-71B4-9086-70553E3595D9",
		"name": "Dorsey, Brock",
		"company": "Libero Donec Consectetuer Corporation",
		"email": "tincidunt@Duis.ca"
	},
	{
		"id": "669CFCD1-DE59-2DDE-2954-577502160DB3",
		"name": "Hall, Jillian",
		"company": "Mauris A Limited",
		"email": "non.sollicitudin.a@idantedictum.com"
	},
	{
		"id": "1A970FD0-167D-6AF3-048B-D52BCB6CA05E",
		"name": "Mccoy, Althea",
		"company": "Hendrerit Consectetuer Incorporated",
		"email": "a.auctor.non@risus.co.uk"
	},
	{
		"id": "5E25C636-046C-D67D-E286-224B4467A239",
		"name": "Hill, Joy",
		"company": "Justo Nec Ante Corp.",
		"email": "tincidunt.nunc.ac@eu.ca"
	},
	{
		"id": "E39D18CD-7A18-C658-BC2E-A39B55DAB7A2",
		"name": "Page, Evangeline",
		"company": "Vel Lectus Cum Associates",
		"email": "ipsum@Integer.net"
	},
	{
		"id": "E9D5CCCD-7846-A5B9-92C4-E7E784092B7D",
		"name": "Chan, Colette",
		"company": "Dolor Vitae Foundation",
		"email": "Morbi@sit.com"
	},
	{
		"id": "9D2AA588-01C3-BF8C-A20F-40DAB1A0F63C",
		"name": "Townsend, Simon",
		"company": "Venenatis A Magna LLP",
		"email": "mollis@nonsapienmolestie.ca"
	},
	{
		"id": "11A51D38-9915-A555-D871-5855FEE50BCA",
		"name": "Buchanan, Tyler",
		"company": "Luctus LLC",
		"email": "commodo@faucibusMorbivehicula.edu"
	},
	{
		"id": "77E453B8-9993-6778-9241-0166FFAF7918",
		"name": "Larson, Rashad",
		"company": "Nec Eleifend Non Corp.",
		"email": "vulputate@magnaUttincidunt.edu"
	},
	{
		"id": "FE6B43BC-8FD6-1715-1FB2-E0E99DBB22D6",
		"name": "Craft, Illiana",
		"company": "Integer Vulputate Corp.",
		"email": "orci@esttemporbibendum.org"
	},
	{
		"id": "B9FAD571-65BB-1056-E043-71D734FFB222",
		"name": "Cunningham, Kelsie",
		"company": "Sed Consulting",
		"email": "mauris.id@Maecenas.org"
	},
	{
		"id": "8AD5600E-9FF0-5856-3B7D-56EF16A30115",
		"name": "Sutton, Felicia",
		"company": "Mauris Elit Company",
		"email": "luctus.sit@risusDonecnibh.edu"
	},
	{
		"id": "12D6D370-3048-228B-C6EA-0386A1AEBCEE",
		"name": "Barry, Emma",
		"company": "Mus Proin Vel Incorporated",
		"email": "amet.consectetuer.adipiscing@montesnasceturridiculus.co.uk"
	},
	{
		"id": "5510D750-FE72-E4FD-6974-B32D3BDE5A76",
		"name": "Lindsey, Ora",
		"company": "Lobortis Risus In Corp.",
		"email": "Curabitur.ut.odio@molestietortornibh.ca"
	},
	{
		"id": "27EF35D5-AA22-4060-5D04-246408350AA4",
		"name": "Estes, Mia",
		"company": "Sed Auctor Ltd",
		"email": "vel.lectus.Cum@magnisdis.co.uk"
	},
	{
		"id": "1D39C7B3-0203-6548-C102-EF6A264F79F9",
		"name": "Britt, Laurel",
		"company": "Cras Consulting",
		"email": "tempus.scelerisque.lorem@sit.org"
	},
	{
		"id": "2D47B121-0C2D-F660-E9F2-BB78B3A321D7",
		"name": "Morin, Stella",
		"company": "Aliquet Lobortis Nisi Ltd",
		"email": "varius@maurisutmi.ca"
	},
	{
		"id": "7F8D8C23-C4E7-1943-64A0-3FFE3B0FDD20",
		"name": "Bird, Helen",
		"company": "Euismod Enim LLC",
		"email": "mi.lorem@etultricesposuere.ca"
	},
	{
		"id": "86E31F21-85BF-2317-CFD0-6935485A7748",
		"name": "Perry, Colt",
		"company": "Sed Institute",
		"email": "Donec.dignissim@Duis.edu"
	},
	{
		"id": "AD70AB6D-4009-313D-304D-6254738A949E",
		"name": "Holder, Martin",
		"company": "Aliquam Corporation",
		"email": "tortor@Duis.ca"
	},
	{
		"id": "4FB25F9F-99E1-0E96-5E98-086DED84336E",
		"name": "Murphy, Wade",
		"company": "Egestas Inc.",
		"email": "sapien.gravida@ligulaAenean.com"
	},
	{
		"id": "DFFF4BF0-14E9-552E-2782-736EFB71E0E8",
		"name": "Key, Tallulah",
		"company": "Vestibulum Accumsan LLC",
		"email": "neque.Sed.eget@mi.org"
	},
	{
		"id": "BB432AFA-C67A-F2F3-E164-41DA62B218BF",
		"name": "Thompson, Steven",
		"company": "Nunc Risus Varius Corp.",
		"email": "orci@aarcu.edu"
	},
	{
		"id": "ACC3D3F4-90CE-FA1F-6D00-E4BEF535E551",
		"name": "Lawrence, Bertha",
		"company": "Laoreet Ipsum Curabitur Corp.",
		"email": "vel.mauris.Integer@cubilia.edu"
	},
	{
		"id": "82D86D23-8BB1-769E-03FE-0E82935F6CC0",
		"name": "Washington, Hunter",
		"company": "Donec Tempor LLC",
		"email": "penatibus@quispede.co.uk"
	},
	{
		"id": "31B74090-20B3-3095-AA3D-975E0A18ADAE",
		"name": "Castaneda, Declan",
		"company": "Metus Vivamus Euismod Limited",
		"email": "parturient.montes.nascetur@nulla.co.uk"
	},
	{
		"id": "4F226B53-49B6-CB33-8415-905C2F40D02C",
		"name": "Hobbs, Dante",
		"company": "Elit Fermentum Limited",
		"email": "nulla.Integer.vulputate@erosturpisnon.org"
	},
	{
		"id": "8E7B22AF-F083-0883-CEE6-702D18E49DD7",
		"name": "Wilkins, Dana",
		"company": "Justo Praesent Luctus Corporation",
		"email": "amet.faucibus.ut@auctorquis.net"
	},
	{
		"id": "87720F2A-D8DC-CADD-1A9A-F2B110A5F3F8",
		"name": "Graham, Xantha",
		"company": "Varius Ultrices Mauris Institute",
		"email": "blandit.Nam.nulla@semperrutrum.ca"
	},
	{
		"id": "7AE0269A-BA66-1140-EBF8-7C5357916DCC",
		"name": "Dejesus, Deacon",
		"company": "Etiam Limited",
		"email": "Suspendisse.sagittis@diamluctuslobortis.net"
	},
	{
		"id": "D6F0790A-5183-CCEC-0BBC-3F594D6F0DD0",
		"name": "Potts, Brock",
		"company": "Lorem Ipsum Sodales Incorporated",
		"email": "orci@quis.org"
	},
	{
		"id": "0A93CCDC-540A-41FA-E684-F4EF35D6CA02",
		"name": "Luna, Shana",
		"company": "Erat Neque Non Incorporated",
		"email": "nulla.magna@sempercursus.org"
	},
	{
		"id": "5DF21DAF-3C07-E4F7-B170-52EA1035B2BC",
		"name": "Osborn, Mira",
		"company": "Tempor Augue Ltd",
		"email": "consectetuer@liberoIntegerin.org"
	},
	{
		"id": "96AEBD11-8A6F-8480-8F98-30C3C6F082D8",
		"name": "Hebert, Carl",
		"company": "Quam Inc.",
		"email": "cursus@felis.org"
	},
	{
		"id": "A082E8EF-6514-CE61-26A1-DA160A0CC280",
		"name": "Bryant, Quinn",
		"company": "Eget PC",
		"email": "tellus@ultricies.ca"
	},
	{
		"id": "BA2BD99F-3159-E4EF-3438-75E3703B0FF4",
		"name": "Kemp, Henry",
		"company": "Purus Corp.",
		"email": "egestas@liberoat.edu"
	},
	{
		"id": "1796C475-A2A1-78CC-CCF3-6D2295464460",
		"name": "Garrison, Oleg",
		"company": "Faucibus Id Libero Corp.",
		"email": "libero.Proin.mi@incursuset.net"
	},
	{
		"id": "86468B96-40C4-1A8A-99C2-ABC802CDAC9F",
		"name": "Bolton, Sandra",
		"company": "Dis Parturient Montes Ltd",
		"email": "eu@eleifendegestas.net"
	},
	{
		"id": "D10128AD-37A9-29A5-B5DF-4D1BB8246F0B",
		"name": "Daugherty, Camden",
		"company": "Lectus Consulting",
		"email": "Cras@lacuspede.com"
	},
	{
		"id": "C5185D8E-6504-8AA6-F934-805AAD240BEA",
		"name": "Good, Tallulah",
		"company": "Nulla In Tincidunt Ltd",
		"email": "lorem.ipsum.sodales@sed.ca"
	},
	{
		"id": "BE3AA36E-C9C6-EE0A-F506-67E9F914EA8C",
		"name": "Shaw, Eleanor",
		"company": "Dui Semper Incorporated",
		"email": "metus@Proin.co.uk"
	},
	{
		"id": "1022795B-4078-10A5-1DB1-3CC0DE271E9F",
		"name": "Whitney, Buffy",
		"company": "In LLC",
		"email": "libero.Donec@CuraeDonec.com"
	},
	{
		"id": "16256E07-914C-C416-D2D6-0203E952C699",
		"name": "Walsh, Cullen",
		"company": "Leo Cras Ltd",
		"email": "Duis.sit@aliquetmagnaa.ca"
	},
	{
		"id": "0C7893FB-CE7F-B293-7ECA-DF3DB323F130",
		"name": "Barry, Britanney",
		"company": "Dictum Augue PC",
		"email": "et.pede@Curabiturconsequatlectus.edu"
	},
	{
		"id": "9471CDAB-61F9-1521-0B8F-C98CD0863DF4",
		"name": "Hartman, Neville",
		"company": "Ornare Lectus Corp.",
		"email": "Donec@sempercursus.ca"
	},
	{
		"id": "6E1C961F-2566-C313-7337-295583226C45",
		"name": "Goodman, Portia",
		"company": "Nullam Foundation",
		"email": "risus@Sedeu.ca"
	},
	{
		"id": "321B0582-2066-96F9-1D2B-FD744BBABA72",
		"name": "Mcneil, Tanisha",
		"company": "Felis Eget Varius Incorporated",
		"email": "vel.convallis@nequeMorbi.co.uk"
	},
	{
		"id": "5186912D-51D3-9DD0-560C-097AE389E652",
		"name": "Bond, Colt",
		"company": "Ante Ipsum Consulting",
		"email": "Donec.egestas@Fuscemilorem.edu"
	},
	{
		"id": "8EFB1DB9-77C0-65DC-FFA0-C68E6E3FDB58",
		"name": "Sweet, Debra",
		"company": "Neque Et Nunc Corporation",
		"email": "Mauris.magna@acorci.ca"
	},
	{
		"id": "5BCBD35C-9871-DBEF-8AAF-5631D336016D",
		"name": "Mcgee, Eric",
		"company": "Vel Faucibus Foundation",
		"email": "ipsum.leo.elementum@acmattis.org"
	},
	{
		"id": "ACADED12-6EA0-720A-0461-4501B2405AB0",
		"name": "Powers, Hilary",
		"company": "Ullamcorper Magna Foundation",
		"email": "mollis.Integer@temporeratneque.ca"
	},
	{
		"id": "20F1FCFC-6303-F988-D7D8-8BE3B5874C38",
		"name": "Lowe, Rebecca",
		"company": "Euismod Foundation",
		"email": "ut@ProinultricesDuis.edu"
	},
	{
		"id": "9FD7E711-C989-29FF-2D34-BD098489FC9A",
		"name": "Wells, Oleg",
		"company": "Donec Associates",
		"email": "enim.Sed@magnaSuspendisse.org"
	},
	{
		"id": "32D8D3D2-80D2-AB61-E362-6C72E6E5710E",
		"name": "Wise, Donovan",
		"company": "Venenatis Corporation",
		"email": "tortor.nibh@Nunc.org"
	},
	{
		"id": "E75C9CB5-4841-9000-85F6-997484943DB4",
		"name": "Shepherd, Arsenio",
		"company": "Quis Lectus Company",
		"email": "amet.ornare.lectus@ultricies.com"
	},
	{
		"id": "AC1CF762-F3DC-6706-A642-E1639F9C8123",
		"name": "Cobb, Deacon",
		"company": "A LLP",
		"email": "posuere.at@nequeMorbiquis.co.uk"
	},
	{
		"id": "71D5AB9B-7225-B9F4-ADBA-39FCEC2F93D8",
		"name": "Norman, Hanna",
		"company": "Malesuada Vel Convallis Incorporated",
		"email": "sagittis.felis@dapibus.net"
	},
	{
		"id": "E3986E7D-271D-EF61-3E00-56565FCBF8CB",
		"name": "Hudson, Bernard",
		"company": "Sed Et Associates",
		"email": "Etiam.vestibulum.massa@iaculis.co.uk"
	},
	{
		"id": "B53E83D9-BCF4-F9D6-F28E-F767BE82BF5A",
		"name": "Colon, Danielle",
		"company": "Lobortis Quis Corp.",
		"email": "Cras.vehicula.aliquet@augueSed.com"
	},
	{
		"id": "9FBF9F0F-FB94-41CA-3081-324438FCD7E4",
		"name": "Whitfield, Lilah",
		"company": "Elit Elit Fermentum Ltd",
		"email": "rhoncus.Proin.nisl@sedsemegestas.com"
	},
	{
		"id": "D00258C9-2914-B7A8-56AB-8A5506659EDE",
		"name": "Morin, Rogan",
		"company": "Convallis In Cursus Foundation",
		"email": "mus.Proin.vel@augue.ca"
	},
	{
		"id": "D922AD29-7C9E-3B9E-D39D-2FF1BB4D1BFA",
		"name": "Grimes, Selma",
		"company": "Dolor Dolor Tempus Institute",
		"email": "velit.eu@vitae.org"
	},
	{
		"id": "5D3D592D-F987-6601-B909-F0A1A739D370",
		"name": "Reilly, Kelly",
		"company": "Ac Turpis Egestas Corporation",
		"email": "lorem.ipsum.sodales@eutellus.ca"
	},
	{
		"id": "223BA56A-F007-E681-4DA5-59D52D0F7E89",
		"name": "Leblanc, Fulton",
		"company": "Imperdiet Limited",
		"email": "facilisis.magna@Nullam.org"
	},
	{
		"id": "C633BBC3-52DC-3C84-26A4-27FFD993E478",
		"name": "Tucker, Keefe",
		"company": "Lacus Quisque Purus Ltd",
		"email": "Morbi.neque.tellus@leoVivamusnibh.com"
	},
	{
		"id": "405928D6-DDC4-89C4-9941-80EDFAF69AF6",
		"name": "Benjamin, Tiger",
		"company": "Eget Ipsum Incorporated",
		"email": "tristique@imperdietornareIn.edu"
	},
	{
		"id": "5936FCB2-D156-B377-F1EC-763B4B171CDA",
		"name": "Holmes, Brianna",
		"company": "Sagittis Augue Eu Incorporated",
		"email": "orci@duiFusce.net"
	},
	{
		"id": "4FB69AA3-E966-CECC-F89E-ADF6510F3804",
		"name": "Pruitt, Maya",
		"company": "Mus Proin Vel Corp.",
		"email": "lectus.quis@Vestibulumaccumsanneque.co.uk"
	},
	{
		"id": "B2622BA8-676A-131B-259F-A4FF0C9F6AC2",
		"name": "Sanders, Cailin",
		"company": "Quis Massa Mauris Ltd",
		"email": "lectus.a@ametnulla.net"
	},
	{
		"id": "BCBE064D-2FF4-7D50-1764-1DB49A501BEC",
		"name": "Goff, Germane",
		"company": "Mauris Ut Mi Associates",
		"email": "lacus.varius.et@hendrerit.edu"
	},
	{
		"id": "FF3A2EE9-2434-EEF0-292C-0B043232F0BE",
		"name": "Hebert, Sonya",
		"company": "Ultrices Mauris Ipsum Company",
		"email": "Sed.pharetra@parturientmontes.co.uk"
	},
	{
		"id": "5DA826A8-F608-6EB9-2D8B-9E3E75E5E4AA",
		"name": "Perkins, Armand",
		"company": "Id Blandit At LLC",
		"email": "semper.tellus.id@Suspendisse.org"
	},
	{
		"id": "950E44A3-9939-4423-9C9E-8A7DD79213FD",
		"name": "Giles, India",
		"company": "Mollis Integer Tincidunt Institute",
		"email": "non.sapien@purusactellus.edu"
	}
];
  
}