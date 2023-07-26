import BoxTitle from "../../../layout/local/BoxTitle"
import BoxWrapper from "../../../layout/local/BoxWrapper"
import WorldTable from "./WorldTable"

const WorldCurrentTop = ({ worldCurrentRes, pageSize }) => {
  return (
    <BoxWrapper colSpan={[4, 4, 4, 4, 4]}>
      <BoxTitle
        name="World List"
        description="A list of Worlds currently deployed to Decentraland servers. Click the thumbnail to jump in!"
        date={""}
        avgData={undefined}
        slicedData={() => {}}
        color={""}
        line={{}}
        setLine={() => {}}
      />
      <WorldTable worldCurrentRes={worldCurrentRes} pageSize={pageSize} />
    </BoxWrapper>
  )
}

export default WorldCurrentTop
