import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

const BChartDescription = () => {
  return (
    <HoverCard>
        <HoverCardTrigger className="text-[#9C8F80] underline cursor-pointer">Chart details</HoverCardTrigger>
            <HoverCardContent className="text-[#9C8F80]">
                The IMF is a vector <span className="text-[#36a2eb]">(B)</span> that can be characterized by three independent components (<span className="text-[#4bc0c0]">BX</span>, <span className="text-[#ffcd56]">BY</span>, <span className="text-[#ff6384]">BZ</span>). 
                                In the Geocentric Solar Magnetospheric (GSM) Coordinate System, the X-axis 
                                points from Earth to the Sun. The Y-axis is defined to be perpendicular to the Earth's magnetic dipole so that the X-Z plane contains the Earth's dipole axis. 
            </HoverCardContent>
    </HoverCard>

  )
}

export default BChartDescription