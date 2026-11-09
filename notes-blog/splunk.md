apache logs?  
splunk index, query splunk-\>reports, dashboard, data models

ADMIN=ingest objects  
POWER   
USER

splunk utilise la language spl  
use failed on search bar to look for weird sus activities, password, access denied  
other interesting commands:  
fail\* OR password  
fail NOT password  
“failed password”

spl= very similar to sql  
count=function  
stats, search=command

in siem, soc, our logs are called events?  
events viewer in windows

transforming commands creates visualisation and statistics

in soar: look at artifacts= digital footprints?, virus total to see reputation

tools:  
splunk ES  
splunk SOAR  
traffic analysis: tcodump, wireshark  
NetFlow and and other Flow logs are examples of tools that capture network metadata, based on a sampling of network packets. In this type of capture, only headers and general identifying information is collected. 

On the other hand, you can capture actual copies of the 1s and 0s that travel through the network (wire data), and store it in a Packet Capture (PCAP) file format. This type of data can be very large in volume, which means it must be captured and stored with discretion.

packets-\>auth info-\>proxies-\>antivirus, and antimalware

Packet captures, while helpful, contain a LOT of data\! So, some other common means for recording or analyzing network traffic include the following:

* **NetFlow:** for per device implementation (read more about the protocol at [RFC 3954](https://www.ietf.org/rfc/rfc3954.txt)  
* **VPC Flow Logs:** for cloud-based capture in AWS or Google Cloud environments  
* **NSG Flow Logs:** a feature of Azure Network Watcher for use in Azure cloud environments  
* **A few examples of network-based systems include** Snort, Suricata, Cisco Firepower Next-Generation IPS, and Palo Alto Networks.  
* **A few examples of host-based systems include** McAfee, OSSEC, and Tripwire.

Juniper firewall 

native logs= server, application logs

