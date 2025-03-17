import ItemsContainer from "../../widgets/ItemsContainer/ItemsContainer"
import Search from "../../widgets/Search/Search"
import useRequest from "../../shared/hooks/useRequest/useRequest"
import './Main.scss'
import LayoutSize from "../../layouts/LayoutSize/LayoutSize"

const Main = () => {
    const {data: request, isLoading } = useRequest()

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <LayoutSize type="grey">
            <div className="main">
                <h1>Запросы о помощи</h1>
                <div className="main__container">
                    <div className="main__content_left">

                    </div>
                    <div className="main__content_right">
                        <div>
                            <Search />
                            <ItemsContainer data={request}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSize>
    )
}

export default Main
