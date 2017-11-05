import config from "woodstockdreamer/config/environment";

export default function() {
  const mailchimp = `${config.herokuHost}:${config.PORT}`;
  const wordpress = config.wordpressHost;

  this.passthrough(`${mailchimp}/**`);
  this.passthrough(`${wordpress}/**`);

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  // this.post(`/people`, function() {
  //   return {
  //     "members": [
  //         {
  //             "id": "f468a45e2f77e0f75a0e629ce9872504",
  //             "email_address": "hello@robabby.com",
  //             "unique_email_id": "a822b404ce",
  //             "email_type": "html",
  //             "status": "subscribed",
  //             "merge_fields": {
  //                 "FNAME": "Nuno",
  //                 "LNAME": "Fernandez"
  //             },
  //             "stats": {
  //                 "avg_open_rate": 0,
  //                 "avg_click_rate": 0
  //             },
  //             "ip_signup": "",
  //             "timestamp_signup": "",
  //             "ip_opt": "98.214.153.90",
  //             "timestamp_opt": "2017-11-04T18:55:20+00:00",
  //             "member_rating": 2,
  //             "last_changed": "2017-11-04T18:55:20+00:00",
  //             "language": "en",
  //             "vip": false,
  //             "email_client": "",
  //             "location": {
  //                 "latitude": 0,
  //                 "longitude": 0,
  //                 "gmtoff": 0,
  //                 "dstoff": 0,
  //                 "country_code": "",
  //                 "timezone": ""
  //             },
  //             "list_id": "91cf58cb85",
  //             "_links": [
  //                 {
  //                     "rel": "self",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"
  //                 },
  //                 {
  //                     "rel": "parent",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json"
  //                 },
  //                 {
  //                     "rel": "update",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504",
  //                     "method": "PATCH",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"
  //                 },
  //                 {
  //                     "rel": "upsert",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504",
  //                     "method": "PUT",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"
  //                 },
  //                 {
  //                     "rel": "delete",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504",
  //                     "method": "DELETE"
  //                 },
  //                 {
  //                     "rel": "activity",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504/activity",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"
  //                 },
  //                 {
  //                     "rel": "goals",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504/goals",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"
  //                 },
  //                 {
  //                     "rel": "notes",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/f468a45e2f77e0f75a0e629ce9872504/notes",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"
  //                 }
  //             ]
  //         },
  //         {
  //             "id": "cc1fd70c2267537857c5a2b94396aa39",
  //             "email_address": "sponge@bob.com",
  //             "unique_email_id": "10064f4649",
  //             "email_type": "html",
  //             "status": "subscribed",
  //             "merge_fields": {
  //                 "FNAME": "Spongebob",
  //                 "LNAME": "Squarepants"
  //             },
  //             "stats": {
  //                 "avg_open_rate": 0,
  //                 "avg_click_rate": 0
  //             },
  //             "ip_signup": "",
  //             "timestamp_signup": "",
  //             "ip_opt": "98.214.153.90",
  //             "timestamp_opt": "2017-11-04T19:43:55+00:00",
  //             "member_rating": 2,
  //             "last_changed": "2017-11-04T19:43:55+00:00",
  //             "language": "",
  //             "vip": false,
  //             "email_client": "",
  //             "location": {
  //                 "latitude": 0,
  //                 "longitude": 0,
  //                 "gmtoff": 0,
  //                 "dstoff": 0,
  //                 "country_code": "",
  //                 "timezone": ""
  //             },
  //             "list_id": "91cf58cb85",
  //             "_links": [
  //                 {
  //                     "rel": "self",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"
  //                 },
  //                 {
  //                     "rel": "parent",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json"
  //                 },
  //                 {
  //                     "rel": "update",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39",
  //                     "method": "PATCH",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json"
  //                 },
  //                 {
  //                     "rel": "upsert",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39",
  //                     "method": "PUT",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
  //                     "schema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json"
  //                 },
  //                 {
  //                     "rel": "delete",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39",
  //                     "method": "DELETE"
  //                 },
  //                 {
  //                     "rel": "activity",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39/activity",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json"
  //                 },
  //                 {
  //                     "rel": "goals",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39/goals",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json"
  //                 },
  //                 {
  //                     "rel": "notes",
  //                     "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members/cc1fd70c2267537857c5a2b94396aa39/notes",
  //                     "method": "GET",
  //                     "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json"
  //                 }
  //             ]
  //         }
  //     ],
  //     "list_id": "91cf58cb85",
  //     "total_items": 2,
  //     "_links": [
  //         {
  //             "rel": "self",
  //             "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members",
  //             "method": "GET",
  //             "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
  //             "schema": "https://us17.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json"
  //         },
  //         {
  //             "rel": "parent",
  //             "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85",
  //             "method": "GET",
  //             "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json"
  //         },
  //         {
  //             "rel": "create",
  //             "href": "https://us17.api.mailchimp.com/3.0/lists/91cf58cb85/members",
  //             "method": "POST",
  //             "targetSchema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
  //             "schema": "https://us17.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json"
  //         }
  //     ]
  //   };
  // });
}
