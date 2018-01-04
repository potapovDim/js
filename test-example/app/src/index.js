import React from 'react'
import { connect } from 'react-redux'

import { filterName, filterVolume, filterPrice, filterDrop, setState } from '../reducer/index'

class SternMachineTable extends React.Component {
  state = {
    name: '',
    volume: '',
    price: '',
    machine: {}
  }

  handleChangeFilter = (type) => ({ target: { value } }) => {
    this.setState({
      [type]: value
    })
  }

  handleAdd = (type) => ({ target: { value } }) => {
    this.setState({
      machine: {
        ...this.state.machine,
        [type]: value
      }
    })
  }

  handleCollectData = () => {
    const { machine } = this.state
    const { dispatch } = this.props

    const propLenght = Object.keys(machine).length

    if (propLenght < 5) return

    for (const prop in machine) {
      if (machine[prop].length < 1) return
    }

    fetch('http://localhost:8085/', {
      node: 'no-cors',
      method: "POST",
      body: JSON.stringify(machine)
    }).then(resp => resp.json()).then((parsedData) => {
      dispatch(setState(parsedData))
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
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success">
              <td style={{ width: '14%', height: '40px' }}><input onChange={this.handleAdd('brand')} placeholder="Марка" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('work_volume')} placeholder="Робочий о'єм , метрів кубічних" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('L')} placeholder="Довжина ,метрів" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('W')} placeholder="Ширина ,метрів" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('weight')} placeholder="Масса ,кг" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('tractor_power')} placeholder="Потужність трактора , кВт" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('price')} placeholder="Ціна" /></td>
            </tr>
          </thead>
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
