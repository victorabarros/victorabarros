define({ "api": [
  {
    "type": "post",
    "url": "/so/:username/Contacts/:addressbookId/save",
    "title": "Save addressbook",
    "description": "<p>Save an addressbook's properties.</p>",
    "version": "1.0.0",
    "name": "PostSaveProperties",
    "group": "AddressBook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "synchronize",
            "description": "<p>1 if we enable EAS synchronization for this addressbook</p>"
          }
        ]
      }
    },
    "filename": "UI/Contacts/UIxContactFolderProperties.m",
    "groupTitle": "AddressBook"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/alarmslist",
    "title": "Get alarms",
    "version": "1.0.0",
    "name": "GetAlarmsList",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/alarmslist?browserTime=1286668800",
        "type": "curl"
      }
    ],
    "description": "<p>Called when each module is loaded or whenever a calendar component is created, modified, deleted or whenever there's a {un}subscribe to a calendar.</p> <p>Workflow :</p> <ul> <li>for ALL subscribed and ACTIVE calendars</li> <li>returns alarms that will occur in the next 48 hours or the non-triggered alarms for non-completed events</li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "browserTime",
            "description": "<p>Epoch time of browser</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "fields",
            "description": "<p>List of fields for each event definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "alarms",
            "description": "<p>List of events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarms.c_folder",
            "description": "<p>Calendar ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarms.c_name",
            "description": "<p>Event UID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarms.c_nextalarm",
            "description": "<p>Epoch time of event's next alarm</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalListingActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/calendarslist",
    "title": "Get calendars",
    "version": "1.0.0",
    "name": "GetCalendarsList",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/calendarslist",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "calendars",
            "description": "<p>List of calendars</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendars.id",
            "description": "<p>Calendar ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendars.name",
            "description": "<p>Human readable name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendars.owner",
            "description": "<p>User ID of owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendars.color",
            "description": "<p>Calendar's hex color code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.active",
            "description": "<p>1 if the calendar is enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "calendars.activeTasks",
            "description": "<p>Number of incompleted tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.includeInFreeBusy",
            "description": "<p>1 if calendar must be include in freebusy</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.showCalendarAlarms",
            "description": "<p>1 if alarms must be enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.showCalendarTasks",
            "description": "<p>1 if tasks must be enabled</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.isWebCalendar",
            "description": "<p>1 if calendar is a read-only external WebDAV calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.reloadOnLogin",
            "description": "<p>1 if calendar is a Web calendar that must be reload when user logins</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "calendars.notifications",
            "description": "<p>Notification (if active user is the calendar's owner)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.notifications.notifyOnPersonalModifications",
            "description": "<p>1 if a mail is sent for each modification made by the owner</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.notifications.notifyOnExternalModifications",
            "description": "<p>1 if a mail is sent for each modification made by someone else</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "calendars.notifications.notifyUserOnPersonalModifications",
            "description": "<p>1 if a mail is sent to an external address for modification made by the owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "calendars.notifications.notifiedUserOnPersonalModifications",
            "description": "<p>Email address to notify changes</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "urls",
            "description": "<p>URLs to this calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.calDavURL",
            "description": "<p>CalDAV URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.webDavXMLURL",
            "description": "<p>WebDAV XML URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.webDavICSURL",
            "description": "<p>WebDAV ICS URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.publicWebDavXMLURL",
            "description": "<p>Public WebDAV XML URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.publicWebDavICSURL",
            "description": "<p>Public WebDAV ICS URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.publicCalDavURL",
            "description": "<p>Public CalDAV URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.webCalendarURL",
            "description": "<p>External WebDAV ICS URL</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalendarSelector.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/:calendarId/:eventId/view",
    "title": "Get event",
    "version": "1.0.0",
    "name": "GetEventView",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/71B6-54904400-1-7C308500.ics/view",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resetAlarm",
            "description": "<p>Mark alarm as triggered if set to 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "snoozeAlarm",
            "description": "<p>Snooze the alarm for this number of minutes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": ".",
            "description": "<p><em>From [UIxAppointmentEditor viewAction]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Event ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "occurrenceId",
            "description": "<p>Occurrence ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Calendar ID (event's folder)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendar",
            "description": "<p>Human readable name of calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedStartDate",
            "description": "<p>Formatted start date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "localizedStartTime",
            "description": "<p>Formatted start time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedEndDate",
            "description": "<p>Formatted end date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "localizedEndTime",
            "description": "<p>Formatted end time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isReadOnly",
            "description": "<p>1 if event is read-only</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userHasRSVP",
            "description": "<p>1 if owner is invited</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "reply",
            "description": "<p>0 if needs-action, 1 if accepted, 2 if declined, 3 if tentative, 4 if delegated</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "attachUrls",
            "description": "<p>Attached URLs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attachUrls.value",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "..",
            "description": "<p><em>From [UIxComponentEditor alarm]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "alarm",
            "description": "<p>Alarm definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.action",
            "description": "<p>Either display or email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "alarm.quantity",
            "description": "<p>Quantity of units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.unit",
            "description": "<p>Either MINUTES, HOURS, or DAYS</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.reference",
            "description": "<p>Either BEFORE or AFTER</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.relation",
            "description": "<p>Either START or END</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "alarm.attendees",
            "description": "<p>Alert attendees by email if true and action is email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "alarm.organizer",
            "description": "<p>Alert organizer by email if true and action is email</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "...",
            "description": "<p><em>From [iCalEvent+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isAllDay",
            "description": "<p>1 if event is all-day</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isTransparent",
            "description": "<p>1 if the event is not opaque</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "....",
            "description": "<p><em>From [iCalEntityObject+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sendAppointmentNotifications",
            "description": "<p>1 if notifications must be sent</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "component",
            "description": "<p>&quot;vevent&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Status (tentative, confirmed, or cancelled)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "createdBy",
            "description": "<p>Value of custom header X-SOGo-Component-Created-By or organizer's &quot;SENT-BY&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority (0-9)</p>"
          },
          {
            "group": "Success 200",
            "type": "NSString",
            "optional": true,
            "field": "classification",
            "description": "<p>Either public, confidential or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "categories",
            "description": "<p>Categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "organizer",
            "description": "<p>Appointment organizer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "organizer.name",
            "description": "<p>Organizer's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizer.email",
            "description": "<p>Organizer's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "organizer.uid",
            "description": "<p>Organizer's user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "organizer.sentBy",
            "description": "<p>Email address of user that is acting on behalf of the calendar owner</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "attendees",
            "description": "<p>List of attendees</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendees.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.uid",
            "description": "<p>System user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendees.partstat",
            "description": "<p>Attendee's participation status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.role",
            "description": "<p>Either CHAIR, REQ-PARTICIPANT, OPT-PARTICIPANT, or NON-PARTICIPANT</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedTo",
            "description": "<p>User that the original request was delegated to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedFrom",
            "description": "<p>User the request was delegated from</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": ".....",
            "description": "<p><em>From [iCalRepeatableEntityObject+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "repeat",
            "description": "<p>Recurrence rule definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repeat.frequency",
            "description": "<p>Either daily, (every weekday), weekly, (bi-weekly), monthly, or yearly</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "repeat.interval",
            "description": "<p>Intervals the recurrence rule repeats</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "repeat.count",
            "description": "<p>Number of occurrences at which to range-bound the recurrence</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "repeat.until",
            "description": "<p>A Unix epoch value that bounds the recurrence rule in an inclusive manner</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "repeat.days",
            "description": "<p>List of days of the week (by day mask)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repeat.days.day",
            "description": "<p>Day of the week (SU, MO, TU, WE, TH, FR, SA)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "repeat.days.occurence",
            "description": "<p>Occurrence of a specific day within the monthly or yearly rule (values are -5 to 5)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.months",
            "description": "<p>List of months of the year (values are 1 to 12)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.monthdays",
            "description": "<p>Days of the month (values are 1 to 31)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "repeat.dates",
            "description": "<p>Recurrence dates (ISO8601)</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxAppointmentEditor.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/eventsblocks",
    "title": "Get events blocks",
    "version": "1.0.0",
    "name": "GetEventsBlocks",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/eventsblocks?day=20141201\\&popupfilter=view_selectedday",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sd",
            "description": "<p>Period start date (YYYYMMDD)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ed",
            "description": "<p>Period end date (YYYYMMDD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "view",
            "description": "<p>Formatting view. Either dayview, multicolumndayview, weekview or monthview.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "days",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "days.date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "days.number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "eventsFields",
            "description": "<p>List of fields for each event definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "events",
            "description": "<p>List of events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_name",
            "description": "<p>Event UID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_folder",
            "description": "<p>Calendar ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.calendarName",
            "description": "<p>Human readable name of calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.c_status",
            "description": "<p>0: Cancelled, 1: Normal, 2: Tentative</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_startdate",
            "description": "<p>Epoch time of start date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_enddate",
            "description": "<p>Epoch time of end date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_location",
            "description": "<p>Event's location</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.c_isallday",
            "description": "<p>1 if event lasts all day</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.c_classification",
            "description": "<p>0: Public, 1: Private, 2: Confidential</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_category",
            "description": "<p>Category</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "events.c_partmails",
            "description": "<p>Participants email addresses</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "events.c_partstates",
            "description": "<p>Participants states</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.c_owner",
            "description": "<p>Event's owner</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.c_iscycle",
            "description": "<p>1 if the event is cyclic</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.c_nextalarm",
            "description": "<p>Epoch time of next alarm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "events.c_recurrence_id",
            "description": "<p>Recurrence ID if event is cyclic</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.isException",
            "description": "<p>1 if recurrence is an exception</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.viewable",
            "description": "<p>1 if active user can view the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.editable",
            "description": "<p>1 if active user can edit the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.erasable",
            "description": "<p>1 if active user can erase the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "events.ownerIsOrganizer",
            "description": "<p>1 if owner is also the organizer</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "blocks",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "blocks.nbr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "blocks.start",
            "description": "<p>Day-based views only</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "blocks.position",
            "description": "<p>Day-based views only</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "blocks.length",
            "description": "<p>Day-based views only</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "blocks.siblings",
            "description": "<p>Day-based views only</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "blocks.realSiblings",
            "description": "<p>Day-based views only</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "allDayBlocks",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allDayBlocks.nbr",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allDayBlocks.start",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allDayBlocks.length",
            "description": ""
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalListingActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/eventslist",
    "title": "List events",
    "version": "1.0.0",
    "name": "GetEventsList",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/eventslist?day=20141201\\&filterpopup=view_selectedday",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "asc",
            "description": "<p>Descending sort when false. Defaults to true (ascending).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Either title, start, end, location, or calendarName.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "day",
            "description": "<p>Selected day (YYYYMMDD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filterpopup",
            "description": "<p>Time period. Either view_today, view_next7, view_next14, view_next31, view_thismonth, view_thisyear, view_future, view_selectedday, or view_all</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search field criteria. Either title_Category_Location or entireContent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>String to match</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "fields",
            "description": "<p>List of fields for each event definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "events.",
            "description": "<p><month>.month                                  Full month and year</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalListingActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/taskslist",
    "title": "List tasks",
    "version": "1.0.0",
    "name": "GetTasksList",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/taskslist?filterpopup=view_all",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "show_completed",
            "description": "<p>Show completed tasks when set to 1. Defaults to ignore completed tasks.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "asc",
            "description": "<p>Descending sort when false. Defaults to true (ascending).</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Either title, priority, end, location, category, calendarname, or status.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "day",
            "description": "<p>Selected day (YYYYMMDD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filterpopup",
            "description": "<p>Time period. Either view_today, view_next7, view_next14, view_next31, view_thismonth, view_thisyear, view_overdue, view_incomplete, view_not_started, or view_all</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search field criteria. Either title_Category_Location or entireContent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "fields",
            "description": "<p>List of fields for each event definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tasks",
            "description": "<p>List of events</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_name",
            "description": "<p>Todo UID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_folder",
            "description": "<p>Calendar ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.calendarName",
            "description": "<p>Human readable name of calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.c_status",
            "description": "<p>0: Needs-action, 1: Completed, 2: In-process, 3: Cancelled</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_enddate",
            "description": "<p>End date (epoch time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.c_classification",
            "description": "<p>0: Public, 1: Private, 2: Confidential</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_category",
            "description": "<p>Category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.viewable",
            "description": "<p>1 if task is viewable by the active user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.editable",
            "description": "<p>1 if task is editable by the active user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.erasable",
            "description": "<p>1 if task is erasable by the active user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_priority",
            "description": "<p>Priority (0-9)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.c_owner",
            "description": "<p>Username of owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tasks.c_recurrence_id",
            "description": "<p>Recurrence ID if task is cyclic</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tasks.isException",
            "description": "<p>1 if task is cyclic and an exception</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.status",
            "description": "<p>Either completed, overdue, duetoday, or duelater</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tasks.formatted_enddate",
            "description": "<p>Localized end date</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalListingActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Calendar/:calendarId/:todoId/view",
    "title": "Get todo",
    "version": "1.0.0",
    "name": "GetToDoView",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/2142-54198E00-F-821E450.ics/view",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "resetAlarm",
            "description": "<p>Mark alarm as triggered if set to 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "snoozeAlarm",
            "description": "<p>Snooze the alarm for this number of minutes</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": ".",
            "description": "<p><em>From [UIxTaskEditor viewAction]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Todo ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Calendar ID (todo's folder)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "calendar",
            "description": "<p>Human readable name of calendar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedStartDate",
            "description": "<p>Formatted start date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedStartTime",
            "description": "<p>Formatted start time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedDueDate",
            "description": "<p>Formatted due date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedDueTime",
            "description": "<p>Formatted due time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedCompletedDate",
            "description": "<p>Formatted completed date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "localizedCompletedTime",
            "description": "<p>Formatted completed time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "isReadOnly",
            "description": "<p>1 if task is read-only</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "attachUrls",
            "description": "<p>Attached URLs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attachUrls.value",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "..",
            "description": "<p><em>From [iCalToDo+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dueDate",
            "description": "<p>Due date (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "completedDate",
            "description": "<p>Completed date (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "percentComplete",
            "description": "<p>Percent completion</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "...",
            "description": "<p><em>From [UIxComponentEdtiror alarm]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "alarm",
            "description": "<p>Alarm definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.action",
            "description": "<p>Either display or email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.quantity",
            "description": "<p>Quantity of units</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.unit",
            "description": "<p>Either MINUTES, HOURS, or DAYS</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.reference",
            "description": "<p>Either BEFORE or AFTER</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.relation",
            "description": "<p>Either START or END</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "alarm.attendees",
            "description": "<p>List of attendees</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "alarm.attendees.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alarm.attendees.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "alarm.attendees.uid",
            "description": "<p>System user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": "....",
            "description": "<p><em>From [iCalEntityObject+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "component",
            "description": "<p>&quot;vtodo&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Value of custom header X-SOGo-Component-Created-By or organizer's &quot;SENT-BY&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority (0-9)</p>"
          },
          {
            "group": "Success 200",
            "type": "NSString",
            "optional": true,
            "field": "classification",
            "description": "<p>Either public, confidential or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "categories",
            "description": "<p>Categories</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status (needs-action, in-process, completed, or cancelled)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "organizer",
            "description": "<p>Appointment organizer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizer.name",
            "description": "<p>Organizer's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizer.email",
            "description": "<p>Organizer's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "attendees",
            "description": "<p>List of attendees</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendees.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.uid",
            "description": "<p>System user ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendees.status",
            "description": "<p>Attendee's participation status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.role",
            "description": "<p>Attendee's role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedTo",
            "description": "<p>User that the original request was delegated to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedFrom",
            "description": "<p>User the request was delegated from</p>"
          },
          {
            "group": "Success 200",
            "type": "_",
            "optional": false,
            "field": ".....",
            "description": "<p><em>From [iCalRepeatableEntityObject+SOGo attributesInContext:]</em></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "repeat",
            "description": "<p>Recurrence rule definition</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repeat.frequency",
            "description": "<p>Either daily, (every weekday), weekly, (bi-weekly), monthly, or yearly</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "repeat.interval",
            "description": "<p>Intervals the recurrence rule repeats</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "repeat.count",
            "description": "<p>Number of occurrences at which to range-bound the recurrence</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "repeat.until",
            "description": "<p>A Unix epoch value that bounds the recurrence rule in an inclusive manner</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.days",
            "description": "<p>List of days of the week</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "repeat.days.day",
            "description": "<p>Day of the week (SU, MO, TU, WE, TH, FR, SA)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "repeat.days.occurence",
            "description": "<p>Occurrence of a specific day within the monthly or yearly rule (valures are -5 to 5)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.months",
            "description": "<p>List of months of the year (values are 1 to 12)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.monthdays",
            "description": "<p>Days of the month (values are 1 to 31)</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxTaskEditor.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/so/:username/Scheduler/addWebCalendar",
    "title": "Add Web calendar",
    "version": "1.0.0",
    "name": "PostAddWebCalendar",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/addWebCalendar \\\n     -H \"Content-Type: application/json\" \\\n     -d '{ \"url\": \"http://localhost/test.ics\" }'",
        "type": "curl"
      }
    ],
    "description": "<p>Called to subscribe to a remote Web calendar (.ics)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The URL of the remote Web calendar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Calendar ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The display name of the calendar</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalMainActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/so/:username/Calendar/:calendarId/:appointmentId/rsvpAppointment",
    "title": "Set participation state",
    "version": "1.0.0",
    "name": "PostEventRsvp",
    "group": "Calendar",
    "description": "<p>Set the participation state of an attendee.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/71B6-54904400-1-7C308500.ics/rsvpAppointment \\\n     -H 'Content-Type: application/json' \\\n     -d '{ \"reply\": 1, \\\n           \"alarm\": { { \"quantity\": 15, \"unit\": \"MINUTES\", \"action\": \"display\", \"reference\": \"BEFORE\", \"relation\": \"START\" } }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reply",
            "description": "<p>0 if needs-action, 1 if accepted, 2 if declined, 3 if tentative, 4 if delegated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "delegatedTo",
            "description": "<p>Email address of delegated attendee</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "alarm",
            "description": "<p>Set an alarm for the attendee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.action",
            "description": "<p>Either display or email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alarm.quantity",
            "description": "<p>Quantity of units</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.unit",
            "description": "<p>Either MINUTES, HOURS, or DAYS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.reference",
            "description": "<p>Either BEFORE or AFTER</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.relation",
            "description": "<p>Either START or END</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "alarm.attendees",
            "description": "<p>Alert attendees by email if 1 and action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "alarm.organizer",
            "description": "<p>Alert organizer by email if 1 and action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "classification",
            "description": "<p>Either public, confidential or private</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxAppointmentEditor.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/so/:username/Calendar/:calendarId/:appointmentId/save(AsAppointment)",
    "title": "Save event",
    "version": "1.0.0",
    "name": "PostEventSave",
    "group": "Calendar",
    "description": "<p>When saving a new event, the action URL must be saveAsAppointment, otherwise it is optional.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/71B6-54904400-1-7C308500.ics/save \\\n     -H 'Content-Type: application/json' \\\n     -d '{ \"summary\": \"Meeting\", \"startDate\": \"2015-01-28\", \"startTime\": \"10:00\", \\\n           \"endDate\": \"2015-01-28\", \"endTime\": \"12:00\" }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": ".",
            "description": "<p><em>Save in [iCalEvent+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Start date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>Start time (HH:MM)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>End date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>End time (HH:MM)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "isAllDay",
            "description": "<p>1 if event is all-day</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isTransparent",
            "description": "<p>1 if the event is not opaque</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "..",
            "description": "<p><em>Save in [iCalEntityObject+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sendAppointmentNotifications",
            "description": "<p>0 if notifications must not be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "summary",
            "description": "<p>Summary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attachUrl",
            "description": "<p>Attached URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Parameter",
            "type": "NSString",
            "optional": true,
            "field": "classification",
            "description": "<p>Either public, confidential or private</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categories",
            "description": "<p>Categories</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "attendees",
            "description": "<p>List of attendees</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attendees.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.uid",
            "description": "<p>System user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attendees.partstat",
            "description": "<p>Attendee's participation status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.role",
            "description": "<p>Either CHAIR, REQ-PARTICIPANT, OPT-PARTICIPANT, or NON-PARTICIPANT</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedTo",
            "description": "<p>User that the original request was delegated to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedFrom",
            "description": "<p>User the request was delegated from</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "alarm",
            "description": "<p>Alarm definition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.action",
            "description": "<p>Either display or email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alarm.quantity",
            "description": "<p>Quantity of units</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.unit",
            "description": "<p>Either MINUTES, HOURS, or DAYS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.reference",
            "description": "<p>Either BEFORE or AFTER</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.relation",
            "description": "<p>Either START or END</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "alarm.attendees",
            "description": "<p>Alert attendees by email if true and action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "alarm.organizer",
            "description": "<p>Alert organizer by email if true and action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "...",
            "description": "<p><em>Save in [iCalRepeatbleEntityObject+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "repeat",
            "description": "<p>Recurrence rule definition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeat.frequency",
            "description": "<p>Either daily, every weekday, weekly, bi-weekly, monthly, or yearly</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "repeat.interval",
            "description": "<p>Intervals the recurrence rule repeats</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.count",
            "description": "<p>Number of occurrences at which to range-bound the recurrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.until",
            "description": "<p>A date (YYYY-MM-DD) that bounds the recurrence rule in an inclusive manner</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "repeat.days",
            "description": "<p>List of days of the week (by day mask)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.days.day",
            "description": "<p>Day of the week (SU, MO, TU, WE, TH, FR, SA)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "repeat.days.occurence",
            "description": "<p>Occurrence of a specific day within the monthly or yearly rule (values are -5 to 5)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.months",
            "description": "<p>List of months of the year (values are 1 to 12)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.monthdays",
            "description": "<p>Days of the month (values are 1 to 31)</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "....",
            "description": "<p><em>Save in [UIxComponentEditor setAttributes:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "destinationCalendar",
            "description": "<p>ID of destination calendar</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "organizer",
            "description": "<p>Appointment organizer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizer.name",
            "description": "<p>Organizer's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizer.email",
            "description": "<p>Organizer's email address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxAppointmentEditor.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/Scheduler/:calendarId/reload",
    "title": "Load Web calendar",
    "version": "1.0.0",
    "name": "PostReloadWebCalendar",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/5B30-55419180-7-6B687280/reload",
        "type": "curl"
      }
    ],
    "description": "<p>Load and parse the events from a remote Web calendar (.ics)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The HTTP code received when accessing the remote URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "imported",
            "description": "<p>The number of imported events in case of success</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "String",
            "optional": true,
            "field": "error",
            "description": "<p>The error type in case of a failure</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalFolderActions.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/so/:username/Calendar/:calendarId/save",
    "title": "Save calendar",
    "description": "<p>Save a calendar's properties.</p>",
    "version": "1.0.0",
    "name": "PostSaveProperties",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/save \\\n     -H \"Content-Type: application/json\" \\\n     -d '{\"name\": \"Personal Calendar\", \"notifications\": {\"notifyOnPersonalModifications\": true}}'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Calendar's hex color code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "includeInFreeBusy",
            "description": "<p>1 if calendar must be include in freebusy</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "showCalendarAlarms",
            "description": "<p>1 if alarms must be enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "showCalendarTasks",
            "description": "<p>1 if tasks must be enabled</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "synchronize",
            "description": "<p>1 if we enable EAS synchronization for this calendar</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reloadOnLogin",
            "description": "<p>1 if calendar is a Web calendar that must be reload when user logins</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "notifications",
            "description": "<p>Notification (if active user is the calendar's owner)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notifications.notifyOnPersonalModifications",
            "description": "<p>1 if a mail is sent for each modification made by the owner</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notifications.notifyOnExternalModifications",
            "description": "<p>1 if a mail is sent for each modification made by someone else</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notifications.notifyUserOnPersonalModifications",
            "description": "<p>1 if a mail is sent to an external address for modification made by the owner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notifications.notifiedUserOnPersonalModifications",
            "description": "<p>Email address to notify changes</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxCalendarProperties.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "post",
    "url": "/so/:username/Calendar/:calendarId/:todoId/save",
    "title": "Save todo",
    "version": "1.0.0",
    "name": "PostToDoSave",
    "group": "Calendar",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/2142-54198E00-F-821E450.ics/save \\\n     -H 'Content-Type: application/json' \\\n     -d '{ \"Summary\": \"Todo\", \"startDate\": \"2015-01-28\", \"startTime\": \"10:00\", \\\n           \"dueDate\": \"2015-01-28\", \"status\": \"in-process\", \"percentComplete\": 25 }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": ".",
            "description": "<p><em>Save in [iCalToDo+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Start date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startTime",
            "description": "<p>Start time (HH:MM)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dueDate",
            "description": "<p>End date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dueTime",
            "description": "<p>End time (HH:MM)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "completedDate",
            "description": "<p>End date (YYYY-MM-DD)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "completedTime",
            "description": "<p>End time (HH:MM)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percentComplete",
            "description": "<p>Percent completion (0-100)</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "..",
            "description": "<p><em>Save in [iCalEntityObject+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sendAppointmentNotifications",
            "description": "<p>0 if notifications must not be sent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "summary",
            "description": "<p>Summary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>Location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Status (needs-action, in-process, completed, or cancelled)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attachUrl",
            "description": "<p>Attached URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Parameter",
            "type": "NSString",
            "optional": true,
            "field": "classification",
            "description": "<p>Either public, confidential or private</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "categories",
            "description": "<p>Categories</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "attendees",
            "description": "<p>List of attendees</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attendees.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.uid",
            "description": "<p>System user ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attendees.status",
            "description": "<p>Attendee's participation status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.role",
            "description": "<p>Either CHAIR, REQ-PARTICIPANT, OPT-PARTICIPANT, or NON-PARTICIPANT</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedTo",
            "description": "<p>User that the original request was delegated to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendees.delegatedFrom",
            "description": "<p>User the request was delegated from</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "alarm",
            "description": "<p>Alarm definition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.action",
            "description": "<p>Either display or email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "alarm.quantity",
            "description": "<p>Quantity of units</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.unit",
            "description": "<p>Either MINUTES, HOURS, or DAYS</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.reference",
            "description": "<p>Either BEFORE or AFTER</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.relation",
            "description": "<p>Either START or END</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "alarm.attendees",
            "description": "<p>Alert attendees by email if true and action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "alarm.organizer",
            "description": "<p>Alert organizer at this email address if action is email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "alarm.organizer.name",
            "description": "<p>Attendee's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alarm.organizer.email",
            "description": "<p>Attendee's email address</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "...",
            "description": "<p><em>Save in [iCalRepeatbleEntityObject+SOGo setAttributes:inContext:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "repeat",
            "description": "<p>Recurrence rule definition</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repeat.frequency",
            "description": "<p>Either daily, every weekday, weekly, bi-weekly, monthly, or yearly</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "repeat.interval",
            "description": "<p>Intervals the recurrence rule repeats</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.count",
            "description": "<p>Number of occurrences at which to range-bound the recurrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.until",
            "description": "<p>A date (YYYY-MM-DD) that bounds the recurrence rule in an inclusive manner</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "repeat.days",
            "description": "<p>List of days of the week (by day mask)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "repeat.days.day",
            "description": "<p>Day of the week (SU, MO, TU, WE, TH, FR, SA)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "repeat.days.occurence",
            "description": "<p>Occurrence of a specific day within the monthly or yearly rule (values are -5 to 5)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.months",
            "description": "<p>List of months of the year (values are 1 to 12)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "repeat.monthdays",
            "description": "<p>Days of the month (values are 1 to 31)</p>"
          },
          {
            "group": "Parameter",
            "type": "_",
            "optional": false,
            "field": "....",
            "description": "<p><em>Save in [UIxComponentEditor setAttributes:]</em></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "organizer",
            "description": "<p>Appointment organizer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizer.name",
            "description": "<p>Organizer's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizer.email",
            "description": "<p>Organizer's email address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/Scheduler/UIxTaskEditor.m",
    "groupTitle": "Calendar"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/acls",
    "title": "List users with rights",
    "version": "1.0.0",
    "name": "GetAcls",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/acls",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users with ACL for the folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.uid",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.userClass",
            "description": "<p>Either 'normal-user', 'normal-group' or 'public-access'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.isSubscribed",
            "description": "<p>1 if the user is subscribed to the folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.cn",
            "description": "<p>User fullname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.c_email",
            "description": "<p>User main email address</p>"
          }
        ]
      }
    },
    "filename": "UI/AdministrationUI/UIxAdministrationAclEditor.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/acls",
    "title": "List users with rights",
    "version": "1.0.0",
    "name": "GetAcls",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/acls",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of users with ACL for the folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.uid",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.userClass",
            "description": "<p>Either 'normal-user', 'normal-group' or 'public-access'</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.isSubscribed",
            "description": "<p>1 if the user is subscribed to the folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.cn",
            "description": "<p>User fullname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "users.c_email",
            "description": "<p>User main email address</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxAclEditor.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/addUserInAcls?uid=:uid",
    "title": "Add user to ACLs",
    "version": "1.0.0",
    "name": "GetAddUserInAcls",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/addUserInAcls?uid=sogo2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxObjectActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "/so/:username/:folderPath/batchDelete?uids=:uids",
    "title": "Delete multiple resources",
    "version": "1.0.0",
    "name": "GetBatchDelete",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Contacts/personal/batchDelete \\\n     -H 'Content-Type: application/json' \\\n     -d '{ \"uids\": [\"1BC8-52F53F80-1-38C52041.vcf\", \"4095-52B0C180-31-9225E71.vlf\"] }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "uids",
            "description": "<p>List of resources IDs</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxFolderActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/canAccessContent",
    "title": "Test access rights",
    "version": "1.0.0",
    "name": "GetCanAccessContent",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/canAccessContent",
        "type": "curl"
      }
    ],
    "filename": "UI/Common/UIxFolderActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/date",
    "title": "Get current day",
    "version": "1.0.0",
    "name": "GetCurrentDate",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/date",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weekday",
            "description": "<p>Full weekday name according to user's locale</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>Full month name according to user's locale</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>Day of month as two digit decimal number (leading zero)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>Year as a decimal number with century</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "abbr",
            "description": "<p>Abbreviations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abbr.weekday",
            "description": "<p>Abbreviated weekday name according to user's locale</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "abbr.month",
            "description": "<p>Abbreviated month name according to user's locale</p>"
          }
        ]
      }
    },
    "filename": "UI/MainUI/SOGoUserHomePage.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/foldersSearch?type=:type",
    "title": "Search for folders",
    "version": "1.0.0",
    "name": "GetFoldersSearch",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/foldersSearch?type=contact",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Either 'calendar' or 'contact'. If nothing is specifed, its both.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "folders",
            "description": "<p>List of matching folders</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folders.name",
            "description": "<p>Path of folder</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folders.displayName",
            "description": "<p>Human readable name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folders.owner",
            "description": "<p>Username of owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "folders.type",
            "description": "<p>Either 'calendar' or 'contact'</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/MainUI/SOGoUserHomePage.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/newguid",
    "title": "Generate new ID",
    "version": "1.0.0",
    "name": "GetNewGUID",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/newguid",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Folder ID (element's parent)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>New element ID</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxFolderActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/removeUserFromAcls?uid=:uid",
    "title": "Remove user from ACLs",
    "version": "1.0.0",
    "name": "GetRemoveUserFromAcls",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/removeUserInAcls?uid=sogo2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxObjectActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/subscribeUsers?uids=:uids",
    "title": "Subscribe user(s)",
    "version": "1.0.0",
    "name": "GetSubscribeUsers",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/subscribeUsers?uids=sogo2,sogo3",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uids",
            "description": "<p>Comma-separated list of user IDs</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxFolderActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/:folderPath/userRights?uid=:uid",
    "title": "Get user's rights",
    "version": "1.0.0",
    "name": "GetUserRights",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/personal/userRights?uid=sogo2",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "Public",
            "description": "<p>Calendar: either None, DAndTViewer, Viewer, Responder, or Modifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "Confidential",
            "description": "<p>Calendar: either None, DAndTViewer, Viewer, Responder, or Modifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "Private",
            "description": "<p>Calendar: either None, DAndTViewer, Viewer, Responder, or Modifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "canCreateObjects",
            "description": "<p>Calendar: can create events and tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "canEraseObjects",
            "description": "<p>Calendar: can erase events and tasks</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "canViewObjects",
            "description": "<p>Address Book: can view cards</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "canEditObjects",
            "description": "<p>Address Book: can modify cards</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxUserRightsEditor.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/usersSearch?search=:search",
    "title": "Search for users",
    "version": "1.0.0",
    "name": "GetUsersSearch",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/usersSearch?search=john",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Substring to match against username or email address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of matching users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.uid",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.c_email",
            "description": "<p>Main email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cn",
            "description": "<p>Common name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.isGroup",
            "description": "<p>1 if the user is a group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 400": [
          {
            "group": "Error 400",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/MainUI/SOGoUserHomePage.m",
    "groupTitle": "Common"
  },
  {
    "type": "post",
    "url": "/so/:username/:module/createFolder",
    "title": "Create folder",
    "version": "1.0.0",
    "name": "PostCreateFolder",
    "group": "Common",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Calendar/createFolder \\\n     -H \"Content-Type: application/json\" \\\n     -d '{ \"name\": \"Business\" }'",
        "type": "curl"
      }
    ],
    "description": "<p>Called to create a new calendar or a new address book.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The display name of the new folder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Folder ID</p>"
          }
        ]
      }
    },
    "filename": "UI/Common/UIxParentFolderActions.m",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/so/:username/Contacts/addressbooksList",
    "title": "Get address books",
    "version": "1.0.0",
    "name": "GetAddressbooksList",
    "group": "Contacts",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Contacts/addressbooksList",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "addressbooks",
            "description": "<p>List of address books</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressbooks.id",
            "description": "<p>AddressBook ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressbooks.name",
            "description": "<p>Human readable name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressbooks.owner",
            "description": "<p>User ID of owner</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addressbooks.synchronize",
            "description": "<p>1 if address book must be synchronized in EAS</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addressbooks.listRequiresDot",
            "description": "<p>1 if listing requires a search</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "addressbooks.isRemote",
            "description": "<p>1 if address book is a global source</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "urls",
            "description": "<p>URLs to this address book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.cardDavURL",
            "description": "<p>CardDAV URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls.publicCardDavURL",
            "description": "<p>Public CardDAV URL</p>"
          }
        ]
      }
    },
    "filename": "UI/Contacts/UIxContactFoldersView.m",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/so/:username/Contacts/:addressbookId/view",
    "title": "List cards",
    "version": "1.0.0",
    "name": "GetContactsList",
    "group": "Contacts",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Contacts/personal/view?search=name_or_address\\&value=Bob",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "partial",
            "description": "<p>Send all contacts IDs and headers of the first 50 contacts. Defaults to false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "asc",
            "description": "<p>Descending sort when false. Defaults to true (ascending).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort field. Either c_cn, c_mail, c_screenname, c_o, or c_telephonenumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Field criteria. Either name_or_address, category, or organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>String to match</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Address book         ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "publicCardDavURL",
            "description": "<p>Public CardDAV URL of the address book</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cardDavURL",
            "description": "<p>CardDAV URL of the address book</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "ids",
            "description": "<p>Sorted IDs when requesting partial results</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "headers",
            "description": "<p>Matching cards</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.id",
            "description": "<p>Card ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_name",
            "description": "<p>Card ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_component",
            "description": "<p>Either vcard or vlist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_cn",
            "description": "<p>Fullname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_givenname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_sn",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_screenname",
            "description": "<p>Screenname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_o",
            "description": "<p>Organization name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "headers.emails",
            "description": "<p>Preferred email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.emails.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.emails.value",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_mail",
            "description": "<p>Preferred email address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.phones",
            "description": "<p>Preferred telephone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.phones.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.phones.value",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_telephonenumber",
            "description": "<p>Preferred telephone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.c_categories",
            "description": "<p>Comma-separated list of categories</p> <p>See [SOGoContactGCSFolder fixupContactRecord:]</p>"
          }
        ]
      }
    },
    "filename": "UI/Contacts/UIxContactsListActions.m",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/so/:username/Contacts/:addressbookId/:cardId/view",
    "title": "Get card",
    "version": "1.0.0",
    "name": "GetData",
    "group": "Contacts",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Contacts/personal/1BC8-52F53F80-1-38C52040.vcf/view",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Card ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Address book ID (card's container)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "c_component",
            "description": "<p>Either vcard or vlist</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "c_givenname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>Nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "c_sn",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "c_fn",
            "description": "<p>Fullname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>Role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "c_screenname",
            "description": "<p>Screen Name (X-AIM for now)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "tz",
            "description": "<p>Timezone</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "org",
            "description": "<p>Main organization</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "orgs",
            "description": "<p>Additional organizations</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": true,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "allCategories",
            "description": "<p>All available categories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "categories",
            "description": "<p>Categories assigned to the card</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categories.value",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hasCertificate",
            "description": "<p>1 if contact has a mail certificate</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "addresses",
            "description": "<p>Postal addresses</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.postoffice",
            "description": "<p>Post office box</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.street",
            "description": "<p>Street address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.street2",
            "description": "<p>Extended address (e.g., apartment or suite number)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.locality",
            "description": "<p>Locality (e.g., city)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.region",
            "description": "<p>Region (e.g., state or province)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.postalcode",
            "description": "<p>Postal code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addresses.country",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "emails",
            "description": "<p>Email addresses</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emails.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emails.value",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "phones",
            "description": "<p>Phone numbers</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phones.type",
            "description": "<p>Type (e.g., mobile or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phones.value",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "urls",
            "description": "<p>URLs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urls.type",
            "description": "<p>Type (e.g., personal or work)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urls.value",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "customFields",
            "description": "<p>Custom fields from Thunderbird</p>"
          }
        ]
      }
    },
    "filename": "UI/Contacts/UIxContactView.m",
    "groupTitle": "Contacts"
  },
  {
    "type": "post",
    "url": "/so/:username/Contacts/:addressbookId/:cardId/save",
    "title": "Save card",
    "version": "1.0.0",
    "name": "PostData",
    "group": "Contacts",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Contacts/personal/1BC8-52F53F80-1-38C52040.vcf/save",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Card ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Address book ID (card's container)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_component",
            "description": "<p>Either vcard or vlist</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_givenname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nickname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_sn",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_cn",
            "description": "<p>Fullname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_screenname",
            "description": "<p>Screen Name (X-AIM for now)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tz",
            "description": "<p>Timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "org",
            "description": "<p>Main organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "orgs",
            "description": "<p>Additional organizations</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "allCategories",
            "description": "<p>All available categories</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Categories assigned to the card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categories.value",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "addresses",
            "description": "<p>Postal addresses</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.postoffice",
            "description": "<p>Post office box</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.street",
            "description": "<p>Street address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.street2",
            "description": "<p>Extended address (e.g., apartment or suite number)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.locality",
            "description": "<p>Locality (e.g., city)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.region",
            "description": "<p>Region (e.g., state or province)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.postalcode",
            "description": "<p>Postal code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addresses.country",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "emails",
            "description": "<p>Email addresses</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emails.type",
            "description": "<p>Type (e.g., home or work)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emails.value",
            "description": "<p>Email address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "phones",
            "description": "<p>Phone numbers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones.type",
            "description": "<p>Type (e.g., mobile or work)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones.value",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "urls",
            "description": "<p>URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "urls.type",
            "description": "<p>Type (e.g., personal or work)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "urls.value",
            "description": "<p>URL</p>"
          }
        ]
      }
    },
    "filename": "UI/Contacts/UIxContactEditor.m",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/so/:username/Mail/:accountId/:mailboxPath/view",
    "title": "List messages UIDs",
    "version": "1.0.0",
    "name": "GetMailUIDsList",
    "group": "Mail",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Mail/0/folderINBOX/view\n     -H 'Content-Type: application/json' \\\n     -d '{ \"sortingAttributes\": { \"match\": \"AND\", \"asc\": true, \"sort\": \"subject\" }, \\\n           \"filters\": [{ \"searchBy\": \"subject\", \"searchInput\": \"foo\" }] }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "sortingAttributes",
            "description": "<p>Sorting preferences</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sortingAttributes.asc",
            "description": "<p>Descending sort when false. Defaults to true (ascending).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortingAttributes.sort",
            "description": "<p>Sort field. Either c_cn, c_mail, c_screenname, c_o, or c_telephonenumber.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortingAttributes.match",
            "description": "<p>Either OR or AND.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortingAttributes.noHeaders",
            "description": "<p>Don't send the headers if true. Defaults to false.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "filters",
            "description": "<p>The filters to apply.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filters.searchBy",
            "description": "<p>Field criteria. Either subject, from, to, cc, or body.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filters.searchInput",
            "description": "<p>String to match.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filters.negative",
            "description": "<p>Reverse the condition when true. Defaults to false.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "threaded",
            "description": "<p>1 if threading is enabled for the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "unseenCount",
            "description": "<p>Number of unread messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "uids",
            "description": "<p>List of uids matching the filters, in the requested order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "headers",
            "description": "<p>The first entry are the fields names.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "headers.To",
            "description": "<p>Recipients</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.To.name",
            "description": "<p>Recipient's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.To.email",
            "description": "<p>Recipient's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "headers.hasAttachment",
            "description": "<p>1 when there is at least one attachment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "headers.isFlagged",
            "description": "<p>1 if the message is flagged</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.Subject",
            "description": "<p>Subject</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "headers.From",
            "description": "<p>Senders</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.From.name",
            "description": "<p>Sender's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.From.email",
            "description": "<p>Sender's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "headers.isRead",
            "description": "<p>1 if message is read</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.Priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.Priority.level",
            "description": "<p>Priority number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.Priority.name",
            "description": "<p>Priority description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.RelativeDate",
            "description": "<p>Message date relative to now</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headers.Size",
            "description": "<p>Formatted message size</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "headers.Flags",
            "description": "<p>Flags, such as &quot;answered&quot; and &quot;seen&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "headers.uid",
            "description": "<p>Message UID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "quotas",
            "description": "<p>Quota information</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "quotas.usedSpace",
            "description": "<p>Used space</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "quotas.maxQuota",
            "description": "<p>Mailbox maximum quota</p>"
          }
        ]
      }
    },
    "filename": "UI/MailerUI/UIxMailListActions.m",
    "groupTitle": "Mail"
  },
  {
    "type": "post",
    "url": "/so/:username/Mail/:accountId/:parentMailboxPath/createFolder",
    "title": "Create mailbox",
    "version": "1.0.0",
    "name": "PostCreateMailbox",
    "group": "Mail",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Mail/0/folderINBOX/createFolder \\\n     -H \"Content-Type: application/json\" \\\n     -d '{ \"name\": \"test\" }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the mailbox</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/MailerUI/UIxMailFolderActions.m",
    "groupTitle": "Mail"
  },
  {
    "type": "post",
    "url": "/so/:username/Mail/:accountId/:mailboxPath/renameFolder",
    "title": "Rename mailbox",
    "version": "1.0.0",
    "name": "PostRenameFolder",
    "group": "Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the mailbox</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>New mailbox path relative to account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sievePath",
            "description": "<p>New mailbox path relative to account for Sieve script usage</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/MailerUI/UIxMailFolderActions.m",
    "groupTitle": "Mail"
  },
  {
    "type": "post",
    "url": "/so/:username/Mail/:accountId/:mailboxPath/renameFolder",
    "title": "Rename mailbox",
    "version": "1.0.0",
    "name": "PostRenameFolder",
    "group": "Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parent",
            "description": "<p>Name of the new parent mailbox</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>New mailbox path relative to account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sievePath",
            "description": "<p>New mailbox path relative to account for Sieve script usage</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/MailerUI/UIxMailFolderActions.m",
    "groupTitle": "Mail"
  },
  {
    "type": "post",
    "url": "/so/:username/Preferences/save",
    "title": "Save user's defaults and settings",
    "version": "1.0.0",
    "name": "PostPreferencesSave",
    "group": "Preferences",
    "description": "<p>Save user's defaults and settings.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/SOGo/so/sogo1/Preferences/save \\\n     -H 'Content-Type: application/json' \\\n     -d '{ \"defaults\": { SOGoDayStartTime: \"09:00\", \"SOGoDayEndTime\": \"18:00\" }, \\\n           \"settings\": { Calendar: { ListState: \"rise\", EventsFilterState: \"view_next7\" } } }'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "defaults",
            "description": "<p>All attributes for user's defaults</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "settings",
            "description": "<p>All attributes for user's settings</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>The error message</p>"
          }
        ]
      }
    },
    "filename": "UI/PreferencesUI/UIxPreferences.m",
    "groupTitle": "Preferences"
  }
] });
