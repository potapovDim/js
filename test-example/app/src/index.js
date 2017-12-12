import React from 'react'
import { connect } from 'react-redux'

import { filterName, filterVolume, filterPrice, filterDrop } from '../reducer/index'

class SternMachineTable extends React.Component {
  state = {
    name: '',
    volume: '',
    price: ''
  }

  handleChangeFilter = (type) => ({ target: { value } }) => {
    this.setState({
      [type]: value
    })
  }

  initFilter = () => {
    const { dispatch } = this.props
    const { name, volume, price } = this.state
    // console.log(name, volume, price)
    if (!!name) {
      dispatch(filterName({ value: name }))
    } else if (!!volume) {
      dispatch(filterVolume({ value: volume }))
    } else if (!!price) {
      dispatch(filterPrice({ value: price }))
    } else if (!price && !volume && !name) {
      dispatch(filterDrop())
    }
  }

  render() {
    let { stern_machines } = this.props;
    let table = stern_machines.map(function (item, index) {
      return (
        <tr key={index}>
          <td style={{ width: '14%' }} className="active brand">{item.brand}</td>
          <td style={{ width: '14%' }} className="active volume">{item.work_volume}</td>
          <td style={{ width: '14%' }} className="active">{item.L}</td>
          <td style={{ width: '14%' }} className="active">{item.W}</td>
          <td style={{ width: '14%' }} className="active">{item.weight}</td>
          <td style={{ width: '14%' }} className="active">{item.tractor_power}</td>
          <td style={{ width: '14%' }} className="active price">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        <table style={{ width: '100%' }} className="table">
          <tbody >
            <tr>
              <td style={{ width: '6%' }}><input onChange={this.handleChangeFilter('name')} style={{ width: '100%' }} ref="brand"
                placeholder="марка" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('volume')} style={{ width: '100%' }} ref="work_vlolume"
                placeholder="Робочий об'єм" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('price')} style={{ width: '100%' }} ref="price" placeholder="ціна " /></td>
            </tr>
          </tbody>
        </table >
        <button className="btn btn-default" onClick={this.initFilter}>Фільтрувати</button>
        <h3 className="text-center">Основні показники машин для роздавання кормів</h3>
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success">
              <td style={{ width: '14%', height: '40px' }}>Марка</td>
              <td style={{ width: '14%' }}>Робочий о'єм , метрів кубічних</td>
              <td style={{ width: '14%' }}>Довжина ,метрів</td>
              <td style={{ width: '14%' }}>Ширина ,метрів</td>
              <td style={{ width: '14%' }}>Масса ,кг</td>
              <td style={{ width: '14%' }}>Потужність трактора , кВт</td>
              <td style={{ width: '14%' }}>Ціна</td>
            </tr>
          </thead>
        </table>
        <table className="table text-center">
          <tbody>
            {table}
          </tbody>
        </table>

        <button onClick={this.handleCollectData}>Додати</button>
        <button onClick={this.handleRemoveData}>Видалити</button>
      </div>
    )
  }
}

export default connect(state => {
  return state.table
})(SternMachineTable)
