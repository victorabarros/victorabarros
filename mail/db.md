# DB

- `ssh -i ./.ssh/id_rsa root@142.93.201.54`
- `docker exec -it mailcowdockerized_mysql-mailcow_1 bash`
- `env | grep MYSQL`
- `mysql -u root -p`

```sql
MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mailcow            |
+--------------------+
2 rows in set (0.000 sec)
```

- `mysql -u mailcow -p mailcow`

```sql
MariaDB [mailcow]> show tables;
+------------------------------+
| Tables_in_mailcow            |
+------------------------------+
| _sogo_static_view            |
| admin                        |
| alias                        |
| alias_domain                 |
| api                          |
| app_passwd                   |
| bcc_maps                     |
| da_acl                       |
| domain                       |
| domain_admins                |
| fido2                        |
| filterconf                   |
| forwarding_hosts             |
| grouped_domain_alias_address |
| grouped_mail_aliases         |
| grouped_sender_acl           |
| grouped_sender_acl_external  |
| imapsync                     |
| logs                         |
| mailbox                      |
| oauth_access_tokens          |
| oauth_authorization_codes    |
| oauth_clients                |
| oauth_refresh_tokens         |
| pushover                     |
| quarantine                   |
| quota2                       |
| quota2replica                |
| recipient_maps               |
| relayhosts                   |
| sender_acl                   |
| settingsmap                  |
| sieve_after                  |
| sieve_before                 |
| sieve_filters                |
| sogo_acl                     |
| sogo_alarms_folder           |
| sogo_cache_folder            |
| sogo_folder_info             |
| sogo_quick_appointment       |
| sogo_quick_contact           |
| sogo_sessions_folder         |
| sogo_store                   |
| sogo_user_profile            |
| sogo_view                    |
| spamalias                    |
| tfa                          |
| tls_policy_override          |
| transports                   |
| user_acl                     |
| versions                     |
+------------------------------+
51 rows in set (0.001 sec)

MariaDB [mailcow]> SELECT * FROM admin LIMIT 10;
+----------+-------------------------------------------------------------------------+------------+---------------------+---------------------+--------+
| username | password                                                                | superadmin | created             | modified            | active |
+----------+-------------------------------------------------------------------------+------------+---------------------+---------------------+--------+
| admin    | *********************************************************************** |          1 | 2020-11-30 02:13:07 | 2020-11-30 02:20:28 |      1 |
+----------+-------------------------------------------------------------------------+------------+---------------------+---------------------+--------+
1 row in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM alias LIMIT 10;
+----+------------------------------+------------------------------+---------------------+---------------------+----------+-----------------+----------------+--------------+--------+
| id | address                      | goto                         | domain              | created             | modified | private_comment | public_comment | sogo_visible | active |
+----+------------------------------+------------------------------+---------------------+---------------------+----------+-----------------+----------------+--------------+--------+
|  1 | me@victorbarros.com.br       | me@victorbarros.com.br       | victorbarros.com.br | 2020-11-30 02:23:16 | NULL     | NULL            | NULL           |            1 |      1 |
|  2 | vanessa@victorbarros.com.br  | vanessa@victorbarros.com.br  | victorbarros.com.br | 2020-12-01 22:46:26 | NULL     | NULL            | NULL           |            1 |      1 |
|  3 | fernando@victorbarros.com.br | fernando@victorbarros.com.br | victorbarros.com.br | 2020-12-01 22:50:52 | NULL     | NULL            | NULL           |            1 |      1 |
+----+------------------------------+------------------------------+---------------------+---------------------+----------+-----------------+----------------+--------------+--------+
3 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM domain LIMIT 10;
+---------------------+---------------------+---------+-----------+----------+----------+-------+-----------+----------+-----+----------------------+--------------------+---------------------+----------+--------+
| domain              | description         | aliases | mailboxes | defquota | maxquota | quota | relayhost | backupmx | gal | relay_all_recipients | relay_unknown_only | created             | modified | active |
+---------------------+---------------------+---------+-----------+----------+----------+-------+-----------+----------+-----+----------------------+--------------------+---------------------+----------+--------+
| victorbarros.com.br | victorbarros.com.br |     400 |        10 |     3072 |    10240 | 10240 | 0         |        0 |   1 |                    0 |                  0 | 2020-11-30 02:21:48 | NULL     |      1 |
+---------------------+---------------------+---------+-----------+----------+----------+-------+-----------+----------+-----+----------------------+--------------------+---------------------+----------+--------+
1 row in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM grouped_domain_alias_address LIMIT 10;
+------------------------------+----------+
| username                     | ad_alias |
+------------------------------+----------+
| fernando@victorbarros.com.br |          |
| me@victorbarros.com.br       |          |
| vanessa@victorbarros.com.br  |          |
+------------------------------+----------+
3 rows in set (0.002 sec)

MariaDB [mailcow]> SELECT * FROM logs LIMIT 10;
+----+--------+---------+--------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------+-------+---------------+------------+
| id | task   | type    | msg                                              | call                                                                                                                                                                                                                                           | user                        | role  | remote        | time       |
+----+--------+---------+--------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------+-------+---------------+------------+
|  1 | D22CE0 | success | ["logged_in_as","admin"]                         | ["check_login","admin","*"]                                                                                                                                                                                                                    | admin                       | admin | 187.114.102.0 | 1606702782 |
|  2 | 74CFAF | success | ["admin_modified","admin"]                       | ["admin","edit",{"username":["admin"],"active":["0","1"],"username_new":"admin","password":"*","password2":"*"}]                                                                                                                               | admin                       | admin | 187.114.102.0 | 1606702828 |
|  3 | DC94C3 | success | ["domain_added","victorbarros.com.br"]           | ["mailbox","add","domain",{"restart_sogo":"1","domain":"victorbarros.com.br","description":"","aliases":"400","mailboxes":"10","defquota":"3072","maxquota":"10240","quota":"10240","gal":"1","active":"1","rl_value":"","rl_frame":"s"},null] | admin                       | admin | 187.114.102.0 | 1606702919 |
|  4 | FC0956 | success | ["mailbox_added","me@victorbarros.com.br"]       | ["mailbox","add","mailbox",{"local_part":"me","domain":"victorbarros.com.br","name":"","quota":"3072","password":"*","password2":"*","active":"1"},null]                                                                                       | admin                       | admin | 187.114.102.0 | 1606702996 |
|  5 | BA30DB | success | ["dkim_added","victorbarros.com.br"]             | ["dkim","add",{"domains":"victorbarros.com.br","dkim_selector":"dkim","key_size":"2048"},false]                                                                                                                                                | admin                       | admin | 187.114.102.0 | 1606703122 |
|  6 | 00D763 | success | ["logged_in_as","admin"]                         | ["check_login","admin","*"]                                                                                                                                                                                                                    | admin                       | admin | 187.114.102.0 | 1606862588 |
|  7 | B58A68 | success | ["object_modified","admin"]                      | ["set_tfa",{"key_id":"GoogleAuth","confirm_password":"*","totp_secret":"4PW2YYTXMF35YM2E","tfa_method":"totp","totp_confirm_token":"319134","set_tfa":""}]                                                                                     | admin                       | admin | 187.114.102.0 | 1606862698 |
|  8 | CCED67 | success | ["mailbox_added","vanessa@victorbarros.com.br"]  | ["mailbox","add","mailbox",{"local_part":"vanessa","domain":"victorbarros.com.br","name":"Vanessa","quota":"3072","password":"*","password2":"*","active":"1"},null]                                                                           | admin                       | admin | 187.114.102.0 | 1606862786 |
|  9 | BBC5BA | success | ["logged_in_as","vanessa@victorbarros.com.br"]   | ["check_login","vanessa@victorbarros.com.br","*"]                                                                                                                                                                                              | vanessa@victorbarros.com.br | user  | 187.114.102.0 | 1606862915 |
| 10 | 43ABD8 | success | ["mailbox_added","fernando@victorbarros.com.br"] | ["mailbox","add","mailbox",{"local_part":"fernando","domain":"victorbarros.com.br","name":"Fernando","quota":"3072","password":"*","password2":"*","active":"1"},null]                                                                         | admin                       | admin | 187.114.102.0 | 1606863052 |
+----+--------+---------+--------------------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+-----------------------------+-------+---------------+------------+
10 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM mailbox LIMIT 10;
+------------------------------+-------------------------------------------------------------------------+----------+-------------+---------------------+------------+------------+---------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------+-------------------+---------------------+----------+--------+
| username                     | password                                                                | name     | description | mailbox_path_prefix | quota      | local_part | domain              | attributes                                                                                                                                                                                                                               | kind | multiple_bookings | created             | modified | active |
+------------------------------+-------------------------------------------------------------------------+----------+-------------+---------------------+------------+------------+---------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------+-------------------+---------------------+----------+--------+
| fernando@victorbarros.com.br | *********************************************************************** | Fernando | NULL        | /var/vmail/         | 3221225472 | fernando   | victorbarros.com.br | {"force_pw_update":"0","tls_enforce_in":"0","tls_enforce_out":"0","sogo_access":"1","imap_access":"1","pop3_access":"1","smtp_access":"1","mailbox_format":"maildir:","quarantine_notification":"hourly","quarantine_category":"reject"} |      |                -1 | 2020-12-01 22:50:52 | NULL     |      1 |
| me@victorbarros.com.br       | *********************************************************************** | me       | NULL        | /var/vmail/         | 3221225472 | me         | victorbarros.com.br | {"force_pw_update":"0","tls_enforce_in":"0","tls_enforce_out":"0","sogo_access":"1","imap_access":"1","pop3_access":"1","smtp_access":"1","mailbox_format":"maildir:","quarantine_notification":"hourly","quarantine_category":"reject"} |      |                -1 | 2020-11-30 02:23:16 | NULL     |      1 |
| vanessa@victorbarros.com.br  | *********************************************************************** | Vanessa  | NULL        | /var/vmail/         | 3221225472 | vanessa    | victorbarros.com.br | {"force_pw_update":"0","tls_enforce_in":"0","tls_enforce_out":"0","sogo_access":"1","imap_access":"1","pop3_access":"1","smtp_access":"1","mailbox_format":"maildir:","quarantine_notification":"hourly","quarantine_category":"reject"} |      |                -1 | 2020-12-01 22:46:26 | NULL     |      1 |
+------------------------------+-------------------------------------------------------------------------+----------+-------------+---------------------+------------+------------+---------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------+-------------------+---------------------+----------+--------+
3 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM quota2 LIMIT 10;
+------------------------------+-------+----------+
| username                     | bytes | messages |
+------------------------------+-------+----------+
| fernando@victorbarros.com.br | 28217 |        2 |
| me@victorbarros.com.br       | 76034 |       15 |
| vanessa@victorbarros.com.br  |  1843 |        1 |
+------------------------------+-------+----------+
3 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM quota2replica LIMIT 10;
+------------------------------+-------+----------+
| username                     | bytes | messages |
+------------------------------+-------+----------+
| fernando@victorbarros.com.br |     0 |        0 |
| me@victorbarros.com.br       |     0 |        0 |
| vanessa@victorbarros.com.br  |     0 |        0 |
+------------------------------+-------+----------+
3 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM sogo_folder_info LIMIT 10;
+-------------+-------------------------------------------------------+---------+------------------------------+----------+----------+-----------------------+------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+---------------+
| c_folder_id | c_path                                                | c_path1 | c_path2                      | c_path3  | c_path4  | c_foldername          | c_location                                                                                                       | c_quick_location                                                                                                       | c_acl_location                                                                                                       | c_folder_type |
+-------------+-------------------------------------------------------+---------+------------------------------+----------+----------+-----------------------+------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+---------------+
|           4 | /Users/fernando@victorbarros.com.br/Calendar/personal | Users   | fernando@victorbarros.com.br | Calendar | personal | Personal Calendar     | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogofernando001506c738a | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogofernando001506c738a_quick | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogofernando001506c738a_acl | Appointment   |
|           1 | /Users/me@victorbarros.com.br/Calendar/personal       | Users   | me@victorbarros.com.br       | Calendar | personal | Personal Calendar     | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0010d44fb20 | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0010d44fb20_quick | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0010d44fb20_acl | Appointment   |
|           2 | /Users/me@victorbarros.com.br/Contacts/personal       | Users   | me@victorbarros.com.br       | Contacts | personal | Personal Address Book | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0015edcc667 | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0015edcc667_quick | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogomevictor0015edcc667_acl | Contact       |
|           3 | /Users/vanessa@victorbarros.com.br/Calendar/personal  | Users   | vanessa@victorbarros.com.br  | Calendar | personal | Personal Calendar     | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogovanessav00148242f70 | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogovanessav00148242f70_quick | mysql://mailcow:ydBoeOgC76YutMHF3JgEBquKBHxe@%2Fvar%2Frun%2Fmysqld%2Fmysqld.sock/mailcow/sogovanessav00148242f70_acl | Appointment   |
+-------------+-------------------------------------------------------+---------+------------------------------+----------+----------+-----------------------+------------------------------------------------------------------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------+---------------+
4 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM sogo_sessions_folder LIMIT 10;
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------+------------+
| c_id                     | c_value                                                                                                                                                                                                                  | c_creationdate | c_lastseen |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------+------------+
| LJnqgKoMa5n3hMgxcp2VsQ== | mmKHBqDXApT7dHfM071RwPYjp98ViHFT/wzbNAy6lgMLJoGH7a+Xtl4YaBQ+LEPe1vjLqzOZiq0+iwm/uFbfncfhq1eamJh9lQgJKPQpYrCFsfzavpyUZC3ORqUrmOxA8RmTjKstHfWJrFbmWBGnoEI038j38b1I09vzIf07+G2JoRxmQotYvHXldQgHqa9KYNAyoMYRBN/fRHCAAJDPow== |     1606953155 | 1606953155 |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------+------------+
1 row in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM sogo_user_profile LIMIT 10;
+------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| c_uid                        | c_defaults                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | c_settings       |
+------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
| fernando@victorbarros.com.br | {"SOGoMailLabelsColors": {"$mdnsent": ["Return Receipt Sent", "#006600"], "$label5": ["Later", "#993399"], "$label2": ["Work", "#FF9900"], "$label4": ["To Do", "#3333FF"], "$label1": ["Important", "#FF0000"], "$label3": ["Personal", "#009900"]}, "SOGoMailAutoSave": "5", "SOGoTimeFormat": "%H:%M", "Forward": {}, "SOGoMailAddOutgoingAddresses": 0, "SOGoCalendarCategories": ["Customer", "Calls", "Favorites", "Meeting", "Ideas", "Miscellaneous", "Birthday", "Anniversary", "Vacation", "Travel", "Projects", "Suppliers", "Gifts", "Clients", "Issues", "Business", "Holidays", "Personal", "Status", "Competition", "Follow up", "Public Holiday"], "SOGoCalendarDefaultReminder": "NONE", "SOGoCalendarCategoriesColors": {"Personal": "#DE4313", "Miscellaneous": "#F6416C", "Gifts": "#736EFE", "Customer": "#F8D800", "Business": "#FA016D", "Status": "#002661", "Anniversary": "#9F44D3", "Vacation": "#623AA2", "Clients": "#E96D71", "Travel": "#F55555", "Competition": "#6018DC", "Calls": "#0396FF", "Favorites": "#EA5455", "Meeting": "#7367F0", "Issues": "#3677FF", "Public Holiday": "#E80505", "Projects": "#8C1BAB", "Holidays": "#0E197D", "Birthday": "#28C76F", "Ideas": "#32CCBC", "Suppliers": "#9708CC", "Follow up": "#D939CD"}, "SOGoLoginModule": "Mail", "SOGoDayStartTime": "08:00", "SOGoCalendarWeekdays": ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], "SOGoCalendarTasksDefaultClassification": "PUBLIC", "SOGoTimeZone": "Etc\/UTC", "SOGoRefreshViewCheck": "manually", "SOGoLanguage": "English", "SOGoAnimationMode": "normal", "SOGoMailSignaturePlacement": "below", "SOGoSelectedAddressBook": "collected", "SOGoContactsCategories": ["Business Partner", "Colleague", "Competitor", "Customer", "Family", "Friend", "Press", "Provider", "VIP"], "SOGoShortDateFormat": "%d-%b-%y", "SOGoFirstWeekOfYear": "January1", "SOGoDefaultCalendar": "selected", "SOGoFirstDayOfWeek": 1, "SOGoAlternateAvatar": "none", "SOGoCalendarEventsDefaultClassification": "PUBLIC", "SOGoMailComposeMessageType": "html", "SOGoGravatarEnabled": 0, "SOGoLongDateFormat": "%A, %B %d, %Y", "SOGoMailDisplayRemoteInlineImages": "never", "SOGoMailComposeFontSize": "0", "SOGoGoogleAuthenticatorEnabled": 0, "SOGoMailMessageForwarding": "inline", "SOGoDayEndTime": "18:00", "SOGoMailReplyPlacement": "below"} | {"Calendar": {}} |
| me@victorbarros.com.br       | {"SOGoMailLabelsColors": {"$mdnsent": ["Return Receipt Sent", "#006600"], "$label5": ["Later", "#993399"], "$label2": ["Work", "#FF9900"], "$label4": ["To Do", "#3333FF"], "$label1": ["Important", "#FF0000"], "$label3": ["Personal", "#009900"]}, "SOGoMailAutoSave": "5", "SOGoTimeFormat": "%H:%M", "Forward": {}, "SOGoMailAddOutgoingAddresses": 0, "SOGoCalendarCategories": ["Customer", "Calls", "Favorites", "Meeting", "Ideas", "Miscellaneous", "Birthday", "Anniversary", "Vacation", "Travel", "Projects", "Suppliers", "Gifts", "Clients", "Issues", "Business", "Holidays", "Personal", "Status", "Competition", "Follow up", "Public Holiday"], "SOGoCalendarDefaultReminder": "NONE", "SOGoCalendarCategoriesColors": {"Personal": "#DE4313", "Miscellaneous": "#F6416C", "Gifts": "#736EFE", "Customer": "#F8D800", "Business": "#FA016D", "Status": "#002661", "Anniversary": "#9F44D3", "Vacation": "#623AA2", "Clients": "#E96D71", "Travel": "#F55555", "Competition": "#6018DC", "Calls": "#0396FF", "Favorites": "#EA5455", "Meeting": "#7367F0", "Issues": "#3677FF", "Public Holiday": "#E80505", "Projects": "#8C1BAB", "Holidays": "#0E197D", "Birthday": "#28C76F", "Ideas": "#32CCBC", "Suppliers": "#9708CC", "Follow up": "#D939CD"}, "SOGoLoginModule": "Mail", "SOGoDayStartTime": "08:00", "SOGoCalendarWeekdays": ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], "SOGoCalendarTasksDefaultClassification": "PUBLIC", "SOGoTimeZone": "Etc\/UTC", "SOGoRefreshViewCheck": "manually", "SOGoLanguage": "English", "SOGoAnimationMode": "normal", "SOGoMailSignaturePlacement": "below", "SOGoSelectedAddressBook": "collected", "SOGoContactsCategories": ["Business Partner", "Colleague", "Competitor", "Customer", "Family", "Friend", "Press", "Provider", "VIP"], "SOGoShortDateFormat": "%d-%b-%y", "SOGoFirstWeekOfYear": "January1", "SOGoDefaultCalendar": "selected", "SOGoFirstDayOfWeek": 1, "SOGoAlternateAvatar": "none", "SOGoCalendarEventsDefaultClassification": "PUBLIC", "SOGoMailComposeMessageType": "html", "SOGoGravatarEnabled": 0, "SOGoLongDateFormat": "%A, %B %d, %Y", "SOGoMailDisplayRemoteInlineImages": "never", "SOGoMailComposeFontSize": "0", "SOGoGoogleAuthenticatorEnabled": 0, "SOGoMailMessageForwarding": "inline", "SOGoDayEndTime": "18:00", "SOGoMailReplyPlacement": "below"} | {"Calendar": {}} |
| vanessa@victorbarros.com.br  | {"SOGoMailLabelsColors": {"$mdnsent": ["Return Receipt Sent", "#006600"], "$label5": ["Later", "#993399"], "$label2": ["Work", "#FF9900"], "$label4": ["To Do", "#3333FF"], "$label1": ["Important", "#FF0000"], "$label3": ["Personal", "#009900"]}, "SOGoMailAutoSave": "5", "SOGoTimeFormat": "%H:%M", "Forward": {}, "SOGoMailAddOutgoingAddresses": 0, "SOGoCalendarCategories": ["Customer", "Calls", "Favorites", "Meeting", "Ideas", "Miscellaneous", "Birthday", "Anniversary", "Vacation", "Travel", "Projects", "Suppliers", "Gifts", "Clients", "Issues", "Business", "Holidays", "Personal", "Status", "Competition", "Follow up", "Public Holiday"], "SOGoCalendarDefaultReminder": "NONE", "SOGoCalendarCategoriesColors": {"Personal": "#DE4313", "Miscellaneous": "#F6416C", "Gifts": "#736EFE", "Customer": "#F8D800", "Business": "#FA016D", "Status": "#002661", "Anniversary": "#9F44D3", "Vacation": "#623AA2", "Clients": "#E96D71", "Travel": "#F55555", "Competition": "#6018DC", "Calls": "#0396FF", "Favorites": "#EA5455", "Meeting": "#7367F0", "Issues": "#3677FF", "Public Holiday": "#E80505", "Projects": "#8C1BAB", "Holidays": "#0E197D", "Birthday": "#28C76F", "Ideas": "#32CCBC", "Suppliers": "#9708CC", "Follow up": "#D939CD"}, "SOGoLoginModule": "Mail", "SOGoDayStartTime": "08:00", "SOGoCalendarWeekdays": ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], "SOGoCalendarTasksDefaultClassification": "PUBLIC", "SOGoTimeZone": "Etc\/UTC", "SOGoRefreshViewCheck": "manually", "SOGoLanguage": "English", "SOGoAnimationMode": "normal", "SOGoMailSignaturePlacement": "below", "SOGoSelectedAddressBook": "collected", "SOGoContactsCategories": ["Business Partner", "Colleague", "Competitor", "Customer", "Family", "Friend", "Press", "Provider", "VIP"], "SOGoShortDateFormat": "%d-%b-%y", "SOGoFirstWeekOfYear": "January1", "SOGoDefaultCalendar": "selected", "SOGoFirstDayOfWeek": 1, "SOGoAlternateAvatar": "none", "SOGoCalendarEventsDefaultClassification": "PUBLIC", "SOGoMailComposeMessageType": "html", "SOGoGravatarEnabled": 0, "SOGoLongDateFormat": "%A, %B %d, %Y", "SOGoMailDisplayRemoteInlineImages": "never", "SOGoMailComposeFontSize": "0", "SOGoGoogleAuthenticatorEnabled": 0, "SOGoMailMessageForwarding": "inline", "SOGoDayEndTime": "18:00", "SOGoMailReplyPlacement": "below"} | {"Calendar": {}} |
+------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+------------------+
3 rows in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM sogo_view LIMIT 10;
+------------------------------+---------------------+------------------------------+-------------------------------------------------------------------------+----------+------------------------------+---------+------------+---------+------+-------------------+
| c_uid                        | domain              | c_name                       | c_password                                                              | c_cn     | mail                         | aliases | ad_aliases | ext_acl | kind | multiple_bookings |
+------------------------------+---------------------+------------------------------+-------------------------------------------------------------------------+----------+------------------------------+---------+------------+---------+------+-------------------+
| fernando@victorbarros.com.br | victorbarros.com.br | fernando@victorbarros.com.br | *********************************************************************** | Fernando | fernando@victorbarros.com.br |         |            |         |      |                -1 |
| me@victorbarros.com.br       | victorbarros.com.br | me@victorbarros.com.br       | *********************************************************************** | me       | me@victorbarros.com.br       |         |            |         |      |                -1 |
| vanessa@victorbarros.com.br  | victorbarros.com.br | vanessa@victorbarros.com.br  | *********************************************************************** | Vanessa  | vanessa@victorbarros.com.br  |         |            |         |      |                -1 |
+------------------------------+---------------------+------------------------------+-------------------------------------------------------------------------+----------+------------------------------+---------+------------+---------+------+-------------------+
3 rows in set (0.003 sec)

MariaDB [mailcow]> SELECT * FROM tfa LIMIT 10;
+----+------------+----------+----------+------------------+-----------+-----------+---------+-------------+--------+
| id | key_id     | username | authmech | secret           | keyHandle | publicKey | counter | certificate | active |
+----+------------+----------+----------+------------------+-----------+-----------+---------+-------------+--------+
|  1 | GoogleAuth | admin    | totp     | 4PW2YYTXMF35YM2E | NULL      | NULL      |       0 | NULL        |      1 |
+----+------------+----------+----------+------------------+-----------+-----------+---------+-------------+--------+
1 row in set (0.000 sec)

MariaDB [mailcow]> SELECT * FROM user_acl LIMIT 10;
+------------------------------+------------+------------+------------+-------------+------------------+----------+-----------+--------------------+----------+------------+------------------------+-------------------------+---------------------+-------------+
| username                     | spam_alias | tls_policy | spam_score | spam_policy | delimiter_action | syncjobs | eas_reset | sogo_profile_reset | pushover | quarantine | quarantine_attachments | quarantine_notification | quarantine_category | app_passwds |
+------------------------------+------------+------------+------------+-------------+------------------+----------+-----------+--------------------+----------+------------+------------------------+-------------------------+---------------------+-------------+
| fernando@victorbarros.com.br |          1 |          1 |          1 |           1 |                1 |        1 |         1 |                  0 |        1 |          1 |                      1 |                       1 |                   1 |           1 |
| me@victorbarros.com.br       |          1 |          1 |          1 |           1 |                1 |        1 |         1 |                  0 |        1 |          1 |                      1 |                       1 |                   1 |           1 |
| vanessa@victorbarros.com.br  |          1 |          1 |          1 |           1 |                1 |        1 |         1 |                  0 |        1 |          1 |                      1 |                       1 |                   1 |           1 |
+------------------------------+------------+------------+------------+-------------+------------------+----------+-----------+--------------------+----------+------------+------------------------+-------------------------+---------------------+-------------+
3 rows in set (0.001 sec)

MariaDB [mailcow]> SELECT * FROM versions LIMIT 10;
+-------------+------------------------------------------------------------------+---------------------+
| application | version                                                          | created             |
+-------------+------------------------------------------------------------------+---------------------+
| db_schema   | 28112020_1210                                                    | 2020-11-30 02:13:07 |
| GUID        | 25e3602fe571fff3752330f6f6219858932612ea7e366603f23542ba5d11a9f5 | 2020-12-01 02:15:00 |
+-------------+------------------------------------------------------------------+---------------------+
2 rows in set (0.000 sec)

```
