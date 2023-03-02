# compound_viewer
A view driven compound object viewer for islandora.

Islandora Compound Object content model allows one to gather together digital objects of different content models. Typical use cases include postcards and audio/video series. Compound Objects could be used to create playlists. 

In Islandora 2, a compound object is created by specifying the model as a compound object. Members or child objects can be added by going to the member object and specifying the Member of relationship to the compound object.

Compound Object Viewer provides a lightweight approach to display media associated with compound object’s members, and to navigate between them. 


## Technical Notes

It uses two views, one to set up the service file display, and other to setup the Compound Object Members thumbnail navigation. 

A hook function is used to load the media or the service file of the first member object. The user can select to view any other member media by clicking on the thumbnail navigation below. Currently, the members are sorted by node id; however, other fields such as the field_wieght can be used to sort the order of the members as well. 

A javascript function is used to highlight the selected member object.

