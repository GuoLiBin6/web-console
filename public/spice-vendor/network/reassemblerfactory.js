/*
 eyeOS Spice Web Client
Copyright (c) 2015 eyeOS S.L.

Contact Jose Carlos Norte (jose@eyeos.com) for more information about this software.

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License version 3 as published by the
Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
details.

You should have received a copy of the GNU Affero General Public License
version 3 along with this program in the file "LICENSE".  If not, see
<http://www.gnu.org/licenses/agpl-3.0.txt>.

See www.eyeos.org for more details. All requests should be sent to licensing@eyeos.org

The interactive user interfaces in modified source and object code versions
of this program must display Appropriate Legal Notices, as required under
Section 5 of the GNU Affero General Public License version 3.

In accordance with Section 7(b) of the GNU Affero General Public License version 3,
these Appropriate Legal Notices must retain the display of the "Powered by
eyeos" logo and retain the original copyright notice. If the display of the
logo is not reasonably feasible for technical reasons, the Appropriate Legal Notices
must display the words "Powered by eyeos" and retain the original copyright notice.
 */

wdi.ReassemblerFactory = {
  getPacketReassembler: function (socketQ) {
    var pE = this.getPacketExtractor(socketQ)
    var sD = this.getSizeDefiner()
    var pC = this.getPacketController(pE, sD)
    return new wdi.PacketReassembler({ packetController: pC })
  },

  getPacketExtractor: function (socketQ) {
    return new wdi.PacketExtractor({ socketQ: socketQ })
  },

  getSizeDefiner: function () {
    return new wdi.SizeDefiner()
  },

  getPacketController: function (packetExtractor, sizeDefiner) {
    return new wdi.PacketController({ packetExtractor: packetExtractor, sizeDefiner: sizeDefiner })
  }
}
