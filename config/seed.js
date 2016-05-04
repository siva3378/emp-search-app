/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
var Employee = require('../app/models/Employee.js');

Employee.find({}).removeAsync().then(function() {
    Employee.createAsync({
            "id": 1,
            "gender": "Female",
            "first_name": "Marie",
            "last_name": "Henderson",
            "role": "Software Test Engineer IV",
            "contact": {
                "office": "163-89-0515",
                "mobile": "694-93-0620",
                "sms": "302-59-7379",
                "email": "mhenderson0@amazonaws.com"
            }
        }, {
            "id": 2,
            "gender": "Male",
            "first_name": "Dennis",
            "last_name": "Day",
            "role": "Pharmacist",
            "contact": {
                "office": "279-56-2097",
                "mobile": "900-35-3480",
                "sms": "505-04-2503",
                "email": "dday1@tinyurl.com"
            }
        }, {
            "id": 3,
            "gender": "Female",
            "first_name": "Julia",
            "last_name": "Greene",
            "role": "Speech Pathologist",
            "contact": {
                "office": "554-34-5704",
                "mobile": "224-43-5780",
                "sms": "415-64-7198",
                "email": "jgreene2@microsoft.com"
            }
        }, {
            "id": 4,
            "gender": "Male",
            "first_name": "Frank",
            "last_name": "Mitchell",
            "role": "Staff Scientist",
            "contact": {
                "office": "182-58-2843",
                "mobile": "198-23-3441",
                "sms": "256-67-5944",
                "email": "fmitchell3@abc.net.au"
            }
        }, {
            "id": 5,
            "gender": "Male",
            "first_name": "Raymond",
            "last_name": "Howell",
            "role": "Geological Engineer",
            "contact": {
                "office": "508-02-0793",
                "mobile": "681-43-6438",
                "sms": "234-66-1147",
                "email": "rhowell4@google.fr"
            }
        }, {
            "id": 6,
            "gender": "Female",
            "first_name": "Jane",
            "last_name": "Morris",
            "role": "Cost Accountant",
            "contact": {
                "office": "324-66-2306",
                "mobile": "998-09-4856",
                "sms": "744-14-6900",
                "email": "jmorris5@t-online.de"
            }
        }, {
            "id": 7,
            "gender": "Male",
            "first_name": "Jason",
            "last_name": "Edwards",
            "role": "Senior Sales Associate",
            "contact": {
                "office": "990-32-0302",
                "mobile": "665-75-0463",
                "sms": "884-36-4353",
                "email": "jedwards6@oracle.com"
            }
        }, {
            "id": 8,
            "gender": "Male",
            "first_name": "Peter",
            "last_name": "Murphy",
            "role": "Account Executive",
            "contact": {
                "office": "396-45-8700",
                "mobile": "662-83-9457",
                "sms": "151-13-1096",
                "email": "pmurphy7@ucoz.com"
            }
        }, {
            "id": 9,
            "gender": "Female",
            "first_name": "Patricia",
            "last_name": "Cooper",
            "role": "Graphic Designer",
            "contact": {
                "office": "802-61-8020",
                "mobile": "843-49-7156",
                "sms": "629-21-6064",
                "email": "pcooper8@cdbaby.com"
            }
        }, {
            "id": 10,
            "gender": "Male",
            "first_name": "Ronald",
            "last_name": "Mason",
            "role": "General Manager",
            "contact": {
                "office": "383-14-0003",
                "mobile": "559-03-0792",
                "sms": "973-96-5716",
                "email": "rmason9@blogspot.com"
            }
        }, {
            "id": 11,
            "gender": "Female",
            "first_name": "Anna",
            "last_name": "Armstrong",
            "role": "Nuclear Power Engineer",
            "contact": {
                "office": "148-10-8775",
                "mobile": "735-76-9868",
                "sms": "196-07-6266",
                "email": "aarmstronga@wikispaces.com"
            }
        }, {
            "id": 12,
            "gender": "Male",
            "first_name": "Robert",
            "last_name": "Washington",
            "role": "Senior Financial Analyst",
            "contact": {
                "office": "975-38-5367",
                "mobile": "737-37-8430",
                "sms": "565-19-1130",
                "email": "rwashingtonb@dagondesign.com"
            }
        }, {
            "id": 13,
            "gender": "Male",
            "first_name": "Arthur",
            "last_name": "Burke",
            "role": "Associate Professor",
            "contact": {
                "office": "575-00-3694",
                "mobile": "290-04-9406",
                "sms": "535-08-9064",
                "email": "aburkec@globo.com"
            }
        }, {
            "id": 14,
            "gender": "Male",
            "first_name": "Roy",
            "last_name": "Black",
            "role": "Business Systems Development Analyst",
            "contact": {
                "office": "160-20-7999",
                "mobile": "905-54-6449",
                "sms": "663-49-4992",
                "email": "rblackd@ucoz.com"
            }
        }, {
            "id": 15,
            "gender": "Male",
            "first_name": "Charles",
            "last_name": "Collins",
            "role": "Research Assistant IV",
            "contact": {
                "office": "557-52-1932",
                "mobile": "597-24-2400",
                "sms": "132-29-6717",
                "email": "ccollinse@parallels.com"
            }
        }, {
            "id": 16,
            "gender": "Male",
            "first_name": "Peter",
            "last_name": "Myers",
            "role": "Executive Secretary",
            "contact": {
                "office": "848-72-7452",
                "mobile": "263-20-6322",
                "sms": "182-17-2924",
                "email": "pmyersf@icq.com"
            }
        }, {
            "id": 17,
            "gender": "Male",
            "first_name": "Willie",
            "last_name": "Larson",
            "role": "Accountant II",
            "contact": {
                "office": "463-10-6173",
                "mobile": "785-78-2146",
                "sms": "395-94-5523",
                "email": "wlarsong@aboutads.info"
            }
        }, {
            "id": 18,
            "gender": "Female",
            "first_name": "Katherine",
            "last_name": "Alexander",
            "role": "VP Accounting",
            "contact": {
                "office": "859-17-6253",
                "mobile": "164-11-3982",
                "sms": "793-02-2157",
                "email": "kalexanderh@spiegel.de"
            }
        }, {
            "id": 19,
            "gender": "Female",
            "first_name": "Marilyn",
            "last_name": "King",
            "role": "Media Manager II",
            "contact": {
                "office": "116-80-1687",
                "mobile": "990-95-1156",
                "sms": "335-91-8885",
                "email": "mkingi@fc2.com"
            }
        }, {
            "id": 20,
            "gender": "Female",
            "first_name": "Christina",
            "last_name": "Walker",
            "role": "Developer II",
            "contact": {
                "office": "806-72-1029",
                "mobile": "400-73-4814",
                "sms": "650-44-6114",
                "email": "cwalkerj@dailymail.co.uk"
            }
        }, {
            "id": 21,
            "gender": "Female",
            "first_name": "Jean",
            "last_name": "Olson",
            "role": "Nurse",
            "contact": {
                "office": "837-39-3147",
                "mobile": "694-88-1377",
                "sms": "740-16-5470",
                "email": "jolsonk@xrea.com"
            }
        }, {
            "id": 22,
            "gender": "Female",
            "first_name": "Christine",
            "last_name": "Watkins",
            "role": "Computer Systems Analyst III",
            "contact": {
                "office": "831-87-8008",
                "mobile": "186-84-2430",
                "sms": "572-24-0536",
                "email": "cwatkinsl@dmoz.org"
            }
        }, {
            "id": 23,
            "gender": "Male",
            "first_name": "Willie",
            "last_name": "Hamilton",
            "role": "Chemical Engineer",
            "contact": {
                "office": "768-44-4466",
                "mobile": "632-73-0131",
                "sms": "613-65-6397",
                "email": "whamiltonm@europa.eu"
            }
        }, {
            "id": 24,
            "gender": "Female",
            "first_name": "Martha",
            "last_name": "Frazier",
            "role": "Pharmacist",
            "contact": {
                "office": "163-10-7319",
                "mobile": "569-22-9630",
                "sms": "508-66-1853",
                "email": "mfraziern@opensource.org"
            }
        }, {
            "id": 25,
            "gender": "Female",
            "first_name": "Kimberly",
            "last_name": "Harvey",
            "role": "Cost Accountant",
            "contact": {
                "office": "611-10-7845",
                "mobile": "643-54-3873",
                "sms": "388-18-7687",
                "email": "kharveyo@imdb.com"
            }
        }, {
            "id": 26,
            "gender": "Male",
            "first_name": "Brandon",
            "last_name": "Woods",
            "role": "Graphic Designer",
            "contact": {
                "office": "921-27-3335",
                "mobile": "277-00-1986",
                "sms": "958-76-7732",
                "email": "bwoodsp@myspace.com"
            }
        }, {
            "id": 27,
            "gender": "Female",
            "first_name": "Irene",
            "last_name": "Duncan",
            "role": "Engineer I",
            "contact": {
                "office": "811-74-4023",
                "mobile": "686-99-6261",
                "sms": "716-34-9143",
                "email": "iduncanq@google.com.hk"
            }
        }, {
            "id": 28,
            "gender": "Male",
            "first_name": "Russell",
            "last_name": "Campbell",
            "role": "Programmer III",
            "contact": {
                "office": "826-42-6379",
                "mobile": "653-84-6965",
                "sms": "956-88-2235",
                "email": "rcampbellr@illinois.edu"
            }
        }, {
            "id": 29,
            "gender": "Male",
            "first_name": "Wayne",
            "last_name": "Dean",
            "role": "Food Chemist",
            "contact": {
                "office": "253-02-3451",
                "mobile": "928-57-8702",
                "sms": "854-95-8488",
                "email": "wdeans@jiathis.com"
            }
        }, {
            "id": 30,
            "gender": "Male",
            "first_name": "Brandon",
            "last_name": "Fuller",
            "role": "Nuclear Power Engineer",
            "contact": {
                "office": "716-32-5414",
                "mobile": "866-22-6678",
                "sms": "795-94-7724",
                "email": "bfullert@state.gov"
            }
        }, {
            "id": 31,
            "gender": "Female",
            "first_name": "Teresa",
            "last_name": "Snyder",
            "role": "Structural Analysis Engineer",
            "contact": {
                "office": "970-68-5532",
                "mobile": "179-91-6667",
                "sms": "469-23-1842",
                "email": "tsnyderu@reverbnation.com"
            }
        }, {
            "id": 32,
            "gender": "Male",
            "first_name": "Craig",
            "last_name": "Sims",
            "role": "Software Test Engineer I",
            "contact": {
                "office": "847-13-6548",
                "mobile": "736-43-1352",
                "sms": "621-18-8952",
                "email": "csimsv@squarespace.com"
            }
        }, {
            "id": 33,
            "gender": "Female",
            "first_name": "Tina",
            "last_name": "Phillips",
            "role": "Software Consultant",
            "contact": {
                "office": "940-90-0540",
                "mobile": "401-07-1671",
                "sms": "149-73-5469",
                "email": "tphillipsw@elegantthemes.com"
            }
        }, {
            "id": 34,
            "gender": "Male",
            "first_name": "Ernest",
            "last_name": "Arnold",
            "role": "Speech Pathologist",
            "contact": {
                "office": "599-85-8663",
                "mobile": "338-15-3299",
                "sms": "529-38-7884",
                "email": "earnoldx@forbes.com"
            }
        }, {
            "id": 35,
            "gender": "Male",
            "first_name": "Kevin",
            "last_name": "Roberts",
            "role": "Assistant Manager",
            "contact": {
                "office": "304-21-0270",
                "mobile": "220-07-0798",
                "sms": "198-03-3326",
                "email": "krobertsy@sogou.com"
            }
        }, {
            "id": 36,
            "gender": "Female",
            "first_name": "Jacqueline",
            "last_name": "Walker",
            "role": "Safety Technician I",
            "contact": {
                "office": "626-94-6596",
                "mobile": "151-97-2081",
                "sms": "311-76-0054",
                "email": "jwalkerz@gov.uk"
            }
        }, {
            "id": 37,
            "gender": "Female",
            "first_name": "Lois",
            "last_name": "Pierce",
            "role": "Staff Scientist",
            "contact": {
                "office": "487-16-4613",
                "mobile": "230-44-5251",
                "sms": "745-39-7122",
                "email": "lpierce10@paypal.com"
            }
        }, {
            "id": 38,
            "gender": "Female",
            "first_name": "Emily",
            "last_name": "Brown",
            "role": "Food Chemist",
            "contact": {
                "office": "238-04-8753",
                "mobile": "898-99-7923",
                "sms": "670-86-3727",
                "email": "ebrown11@adobe.com"
            }
        }, {
            "id": 39,
            "gender": "Male",
            "first_name": "Ronald",
            "last_name": "Cole",
            "role": "Desktop Support Technician",
            "contact": {
                "office": "651-85-3330",
                "mobile": "999-31-6219",
                "sms": "243-54-8754",
                "email": "rcole12@mail.ru"
            }
        }, {
            "id": 40,
            "gender": "Female",
            "first_name": "Emily",
            "last_name": "Cole",
            "role": "Help Desk Technician",
            "contact": {
                "office": "781-80-8658",
                "mobile": "600-34-5916",
                "sms": "474-27-4885",
                "email": "ecole13@networksolutions.com"
            }
        }, {
            "id": 41,
            "gender": "Male",
            "first_name": "Paul",
            "last_name": "Fowler",
            "role": "Administrative Officer",
            "contact": {
                "office": "922-92-1476",
                "mobile": "857-98-5723",
                "sms": "789-72-8422",
                "email": "pfowler14@time.com"
            }
        }, {
            "id": 42,
            "gender": "Female",
            "first_name": "Frances",
            "last_name": "Matthews",
            "role": "Human Resources Manager",
            "contact": {
                "office": "960-67-1293",
                "mobile": "171-14-2093",
                "sms": "888-40-6340",
                "email": "fmatthews15@amazon.de"
            }
        }, {
            "id": 43,
            "gender": "Female",
            "first_name": "Helen",
            "last_name": "Ruiz",
            "role": "Accountant II",
            "contact": {
                "office": "201-38-5240",
                "mobile": "574-05-4058",
                "sms": "378-60-1942",
                "email": "hruiz16@google.cn"
            }
        }, {
            "id": 44,
            "gender": "Male",
            "first_name": "Eugene",
            "last_name": "Berry",
            "role": "VP Sales",
            "contact": {
                "office": "334-88-8055",
                "mobile": "854-61-2434",
                "sms": "576-91-0641",
                "email": "eberry17@intel.com"
            }
        }, {
            "id": 45,
            "gender": "Male",
            "first_name": "Larry",
            "last_name": "Fields",
            "role": "Dental Hygienist",
            "contact": {
                "office": "271-64-7211",
                "mobile": "660-81-5408",
                "sms": "832-17-1893",
                "email": "lfields18@unc.edu"
            }
        }, {
            "id": 46,
            "gender": "Male",
            "first_name": "Aaron",
            "last_name": "Adams",
            "role": "Health Coach II",
            "contact": {
                "office": "856-36-8645",
                "mobile": "306-36-9888",
                "sms": "514-43-5884",
                "email": "aadams19@ca.gov"
            }
        }, {
            "id": 47,
            "gender": "Female",
            "first_name": "Janet",
            "last_name": "Green",
            "role": "Assistant Professor",
            "contact": {
                "office": "930-31-1586",
                "mobile": "932-14-6303",
                "sms": "282-13-1292",
                "email": "jgreen1a@noaa.gov"
            }
        }, {
            "id": 48,
            "gender": "Male",
            "first_name": "Nicholas",
            "last_name": "Garrett",
            "role": "Research Nurse",
            "contact": {
                "office": "824-55-6173",
                "mobile": "894-59-6061",
                "sms": "660-85-1952",
                "email": "ngarrett1b@networkadvertising.org"
            }
        }, {
            "id": 49,
            "gender": "Male",
            "first_name": "Alan",
            "last_name": "Harvey",
            "role": "Operator",
            "contact": {
                "office": "865-74-4883",
                "mobile": "491-63-9176",
                "sms": "359-59-8842",
                "email": "aharvey1c@auda.org.au"
            }
        }, {
            "id": 50,
            "gender": "Female",
            "first_name": "Catherine",
            "last_name": "Boyd",
            "role": "Physical Therapy Assistant",
            "contact": {
                "office": "272-15-3265",
                "mobile": "309-40-5045",
                "sms": "409-05-5888",
                "email": "cboyd1d@archive.org"
            }
        }, {
            "id": 51,
            "gender": "Male",
            "first_name": "Randy",
            "last_name": "Harrison",
            "role": "Graphic Designer",
            "contact": {
                "office": "875-59-6222",
                "mobile": "903-29-1411",
                "sms": "278-57-6673",
                "email": "rharrison1e@sphinn.com"
            }
        }, {
            "id": 52,
            "gender": "Female",
            "first_name": "Heather",
            "last_name": "Dean",
            "role": "Account Representative III",
            "contact": {
                "office": "199-06-9452",
                "mobile": "181-57-1822",
                "sms": "164-03-4422",
                "email": "hdean1f@artisteer.com"
            }
        }, {
            "id": 53,
            "gender": "Female",
            "first_name": "Jane",
            "last_name": "Kim",
            "role": "Database Administrator II",
            "contact": {
                "office": "383-52-1529",
                "mobile": "688-77-6239",
                "sms": "151-06-0362",
                "email": "jkim1g@nytimes.com"
            }
        }, {
            "id": 54,
            "gender": "Male",
            "first_name": "Brian",
            "last_name": "Carr",
            "role": "Human Resources Manager",
            "contact": {
                "office": "396-29-9733",
                "mobile": "625-20-0772",
                "sms": "992-27-9454",
                "email": "bcarr1h@slideshare.net"
            }
        }, {
            "id": 55,
            "gender": "Female",
            "first_name": "Annie",
            "last_name": "Butler",
            "role": "Social Worker",
            "contact": {
                "office": "416-13-2711",
                "mobile": "658-21-7039",
                "sms": "610-01-1534",
                "email": "abutler1i@mlb.com"
            }
        }, {
            "id": 56,
            "gender": "Male",
            "first_name": "Larry",
            "last_name": "Martinez",
            "role": "Structural Engineer",
            "contact": {
                "office": "461-54-9393",
                "mobile": "277-68-5718",
                "sms": "973-93-0071",
                "email": "lmartinez1j@oakley.com"
            }
        }, {
            "id": 57,
            "gender": "Male",
            "first_name": "Daniel",
            "last_name": "Franklin",
            "role": "Marketing Manager",
            "contact": {
                "office": "956-66-4044",
                "mobile": "419-80-4194",
                "sms": "862-33-1453",
                "email": "dfranklin1k@unc.edu"
            }
        }, {
            "id": 58,
            "gender": "Female",
            "first_name": "Rose",
            "last_name": "Hughes",
            "role": "Professor",
            "contact": {
                "office": "422-89-9543",
                "mobile": "427-56-6698",
                "sms": "706-81-9164",
                "email": "rhughes1l@nymag.com"
            }
        }, {
            "id": 59,
            "gender": "Female",
            "first_name": "Michelle",
            "last_name": "Martinez",
            "role": "Paralegal",
            "contact": {
                "office": "475-23-8176",
                "mobile": "585-86-5629",
                "sms": "304-32-2111",
                "email": "mmartinez1m@over-blog.com"
            }
        }, {
            "id": 60,
            "gender": "Female",
            "first_name": "Helen",
            "last_name": "Gomez",
            "role": "Software Engineer I",
            "contact": {
                "office": "597-17-7581",
                "mobile": "347-76-3765",
                "sms": "134-55-4468",
                "email": "hgomez1n@psu.edu"
            }
        }, {
            "id": 61,
            "gender": "Male",
            "first_name": "Jimmy",
            "last_name": "Johnston",
            "role": "Programmer Analyst I",
            "contact": {
                "office": "580-36-6556",
                "mobile": "643-39-6764",
                "sms": "674-20-3486",
                "email": "jjohnston1o@google.ca"
            }
        }, {
            "id": 62,
            "gender": "Female",
            "first_name": "Catherine",
            "last_name": "Bowman",
            "role": "Database Administrator II",
            "contact": {
                "office": "101-53-4406",
                "mobile": "751-74-0083",
                "sms": "453-05-7453",
                "email": "cbowman1p@nih.gov"
            }
        }, {
            "id": 63,
            "gender": "Female",
            "first_name": "Lisa",
            "last_name": "Fox",
            "role": "Research Associate",
            "contact": {
                "office": "242-35-7684",
                "mobile": "426-18-9046",
                "sms": "256-60-4214",
                "email": "lfox1q@liveinternet.ru"
            }
        }, {
            "id": 64,
            "gender": "Female",
            "first_name": "Christine",
            "last_name": "Wagner",
            "role": "Account Coordinator",
            "contact": {
                "office": "798-81-1487",
                "mobile": "212-72-2689",
                "sms": "140-24-9052",
                "email": "cwagner1r@google.com.br"
            }
        }, {
            "id": 65,
            "gender": "Female",
            "first_name": "Ann",
            "last_name": "Welch",
            "role": "Professor",
            "contact": {
                "office": "890-56-9911",
                "mobile": "291-36-1977",
                "sms": "681-97-5471",
                "email": "awelch1s@google.com.au"
            }
        }, {
            "id": 66,
            "gender": "Female",
            "first_name": "Betty",
            "last_name": "Holmes",
            "role": "Physical Therapy Assistant",
            "contact": {
                "office": "320-79-0669",
                "mobile": "228-38-3366",
                "sms": "845-65-9775",
                "email": "bholmes1t@npr.org"
            }
        }, {
            "id": 67,
            "gender": "Male",
            "first_name": "Timothy",
            "last_name": "Sims",
            "role": "Administrative Assistant IV",
            "contact": {
                "office": "842-66-5315",
                "mobile": "800-72-8458",
                "sms": "719-77-1520",
                "email": "tsims1u@yahoo.co.jp"
            }
        }, {
            "id": 68,
            "gender": "Female",
            "first_name": "Anna",
            "last_name": "Russell",
            "role": "Budget/Accounting Analyst I",
            "contact": {
                "office": "668-78-8034",
                "mobile": "448-89-0301",
                "sms": "137-18-2593",
                "email": "arussell1v@phpbb.com"
            }
        }, {
            "id": 69,
            "gender": "Male",
            "first_name": "Joseph",
            "last_name": "Austin",
            "role": "Account Executive",
            "contact": {
                "office": "217-77-0473",
                "mobile": "494-87-7294",
                "sms": "930-28-9579",
                "email": "jaustin1w@freewebs.com"
            }
        }, {
            "id": 70,
            "gender": "Female",
            "first_name": "Karen",
            "last_name": "Ramirez",
            "role": "Programmer I",
            "contact": {
                "office": "943-35-4389",
                "mobile": "318-92-1512",
                "sms": "685-12-6567",
                "email": "kramirez1x@latimes.com"
            }
        }, {
            "id": 71,
            "gender": "Male",
            "first_name": "Patrick",
            "last_name": "Thomas",
            "role": "Marketing Manager",
            "contact": {
                "office": "285-52-0757",
                "mobile": "751-87-6093",
                "sms": "119-43-4060",
                "email": "pthomas1y@vinaora.com"
            }
        }, {
            "id": 72,
            "gender": "Male",
            "first_name": "Robert",
            "last_name": "Rivera",
            "role": "Office Assistant II",
            "contact": {
                "office": "460-70-3557",
                "mobile": "471-71-0858",
                "sms": "171-11-7750",
                "email": "rrivera1z@sun.com"
            }
        }, {
            "id": 73,
            "gender": "Female",
            "first_name": "Marie",
            "last_name": "Watson",
            "role": "Human Resources Assistant III",
            "contact": {
                "office": "160-42-5977",
                "mobile": "994-85-2814",
                "sms": "213-23-7230",
                "email": "mwatson20@usnews.com"
            }
        }, {
            "id": 74,
            "gender": "Male",
            "first_name": "Ernest",
            "last_name": "Owens",
            "role": "Accounting Assistant IV",
            "contact": {
                "office": "450-94-8361",
                "mobile": "401-67-3223",
                "sms": "247-90-1268",
                "email": "eowens21@ebay.com"
            }
        }, {
            "id": 75,
            "gender": "Male",
            "first_name": "Frank",
            "last_name": "Ortiz",
            "role": "Environmental Specialist",
            "contact": {
                "office": "950-33-3838",
                "mobile": "595-53-3034",
                "sms": "203-52-7040",
                "email": "fortiz22@nasa.gov"
            }
        }, {
            "id": 76,
            "gender": "Male",
            "first_name": "Joe",
            "last_name": "Larson",
            "role": "Actuary",
            "contact": {
                "office": "254-12-1941",
                "mobile": "575-36-3054",
                "sms": "151-81-8400",
                "email": "jlarson23@jiathis.com"
            }
        }, {
            "id": 77,
            "gender": "Female",
            "first_name": "Sharon",
            "last_name": "Grant",
            "role": "Civil Engineer",
            "contact": {
                "office": "337-40-4071",
                "mobile": "234-71-8948",
                "sms": "289-02-1486",
                "email": "sgrant24@indiatimes.com"
            }
        }, {
            "id": 78,
            "gender": "Female",
            "first_name": "Joan",
            "last_name": "Fowler",
            "role": "Pharmacist",
            "contact": {
                "office": "567-99-3573",
                "mobile": "361-06-8369",
                "sms": "942-91-6201",
                "email": "jfowler25@vkontakte.ru"
            }
        }, {
            "id": 79,
            "gender": "Female",
            "first_name": "Janice",
            "last_name": "Patterson",
            "role": "Associate Professor",
            "contact": {
                "office": "848-90-5609",
                "mobile": "244-17-3794",
                "sms": "895-20-9888",
                "email": "jpatterson26@ted.com"
            }
        }, {
            "id": 80,
            "gender": "Male",
            "first_name": "Roy",
            "last_name": "Ellis",
            "role": "Electrical Engineer",
            "contact": {
                "office": "761-12-1221",
                "mobile": "807-40-4523",
                "sms": "141-79-3865",
                "email": "rellis27@si.edu"
            }
        }, {
            "id": 81,
            "gender": "Female",
            "first_name": "Sandra",
            "last_name": "Watson",
            "role": "Executive Secretary",
            "contact": {
                "office": "502-44-4778",
                "mobile": "800-57-1748",
                "sms": "758-80-0348",
                "email": "swatson28@chronoengine.com"
            }
        }, {
            "id": 82,
            "gender": "Female",
            "first_name": "Angela",
            "last_name": "Richards",
            "role": "Systems Administrator II",
            "contact": {
                "office": "313-84-0488",
                "mobile": "244-84-4388",
                "sms": "143-50-7184",
                "email": "arichards29@msu.edu"
            }
        }, {
            "id": 83,
            "gender": "Male",
            "first_name": "Randy",
            "last_name": "Lawrence",
            "role": "Tax Accountant",
            "contact": {
                "office": "841-00-7536",
                "mobile": "552-37-7487",
                "sms": "430-97-3979",
                "email": "rlawrence2a@discovery.com"
            }
        }, {
            "id": 84,
            "gender": "Female",
            "first_name": "Diana",
            "last_name": "Greene",
            "role": "Project Manager",
            "contact": {
                "office": "920-56-9298",
                "mobile": "533-56-1154",
                "sms": "416-92-0664",
                "email": "dgreene2b@stanford.edu"
            }
        }, {
            "id": 85,
            "gender": "Male",
            "first_name": "Daniel",
            "last_name": "Medina",
            "role": "Nurse Practicioner",
            "contact": {
                "office": "354-24-0055",
                "mobile": "792-73-9387",
                "sms": "925-62-8766",
                "email": "dmedina2c@discovery.com"
            }
        }, {
            "id": 86,
            "gender": "Female",
            "first_name": "Mildred",
            "last_name": "Williamson",
            "role": "Desktop Support Technician",
            "contact": {
                "office": "741-89-2153",
                "mobile": "794-64-4158",
                "sms": "404-81-3915",
                "email": "mwilliamson2d@friendfeed.com"
            }
        }, {
            "id": 87,
            "gender": "Male",
            "first_name": "Anthony",
            "last_name": "Garcia",
            "role": "Junior Executive",
            "contact": {
                "office": "486-11-2726",
                "mobile": "310-59-4877",
                "sms": "637-16-0089",
                "email": "agarcia2e@rambler.ru"
            }
        }, {
            "id": 88,
            "gender": "Male",
            "first_name": "Andrew",
            "last_name": "Campbell",
            "role": "Staff Scientist",
            "contact": {
                "office": "107-38-1507",
                "mobile": "666-06-7690",
                "sms": "219-16-5894",
                "email": "acampbell2f@cbc.ca"
            }
        }, {
            "id": 89,
            "gender": "Female",
            "first_name": "Marilyn",
            "last_name": "Brooks",
            "role": "Desktop Support Technician",
            "contact": {
                "office": "909-43-3308",
                "mobile": "759-82-5842",
                "sms": "650-04-3009",
                "email": "mbrooks2g@house.gov"
            }
        }, {
            "id": 90,
            "gender": "Male",
            "first_name": "Paul",
            "last_name": "Dunn",
            "role": "Information Systems Manager",
            "contact": {
                "office": "272-94-5839",
                "mobile": "672-39-3301",
                "sms": "145-68-5514",
                "email": "pdunn2h@google.com.hk"
            }
        }, {
            "id": 91,
            "gender": "Male",
            "first_name": "Keith",
            "last_name": "Tucker",
            "role": "Health Coach IV",
            "contact": {
                "office": "841-47-8786",
                "mobile": "708-42-2454",
                "sms": "424-90-0515",
                "email": "ktucker2i@123-reg.co.uk"
            }
        }, {
            "id": 92,
            "gender": "Male",
            "first_name": "Kevin",
            "last_name": "Sanchez",
            "role": "Design Engineer",
            "contact": {
                "office": "163-03-3732",
                "mobile": "931-91-6435",
                "sms": "314-06-8363",
                "email": "ksanchez2j@sciencedirect.com"
            }
        }, {
            "id": 93,
            "gender": "Female",
            "first_name": "Robin",
            "last_name": "Brooks",
            "role": "Nurse Practicioner",
            "contact": {
                "office": "918-12-5891",
                "mobile": "124-03-1548",
                "sms": "464-70-3250",
                "email": "rbrooks2k@exblog.jp"
            }
        }, {
            "id": 94,
            "gender": "Female",
            "first_name": "Julia",
            "last_name": "Wallace",
            "role": "Graphic Designer",
            "contact": {
                "office": "279-57-1379",
                "mobile": "229-57-3883",
                "sms": "490-81-2029",
                "email": "jwallace2l@sakura.ne.jp"
            }
        }, {
            "id": 95,
            "gender": "Male",
            "first_name": "Earl",
            "last_name": "Watson",
            "role": "Actuary",
            "contact": {
                "office": "663-21-9958",
                "mobile": "441-52-7478",
                "sms": "907-78-3266",
                "email": "ewatson2m@skype.com"
            }
        }, {
            "id": 96,
            "gender": "Female",
            "first_name": "Denise",
            "last_name": "Ramos",
            "role": "Systems Administrator II",
            "contact": {
                "office": "750-93-9454",
                "mobile": "117-25-4380",
                "sms": "573-48-1071",
                "email": "dramos2n@booking.com"
            }
        }, {
            "id": 97,
            "gender": "Male",
            "first_name": "Roger",
            "last_name": "Knight",
            "role": "Nurse",
            "contact": {
                "office": "547-52-6117",
                "mobile": "999-33-7797",
                "sms": "117-64-7845",
                "email": "rknight2o@loc.gov"
            }
        }, {
            "id": 98,
            "gender": "Female",
            "first_name": "Martha",
            "last_name": "Mccoy",
            "role": "Analyst Programmer",
            "contact": {
                "office": "511-30-2034",
                "mobile": "589-72-6586",
                "sms": "252-05-9988",
                "email": "mmccoy2p@woothemes.com"
            }
        }, {
            "id": 99,
            "gender": "Female",
            "first_name": "Frances",
            "last_name": "Freeman",
            "role": "Developer II",
            "contact": {
                "office": "596-24-1662",
                "mobile": "265-75-9868",
                "sms": "882-33-0586",
                "email": "ffreeman2q@canalblog.com"
            }
        }, {
            "id": 100,
            "gender": "Male",
            "first_name": "Paul",
            "last_name": "Rogers",
            "role": "Statistician III",
            "contact": {
                "office": "976-06-8371",
                "mobile": "554-28-1390",
                "sms": "132-65-2724",
                "email": "progers2r@arstechnica.com"
            }
        })
        .then(function() {
            console.log('finished populating Employees');
        })
});
