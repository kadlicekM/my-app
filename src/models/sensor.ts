import { SensorType } from './sensor-type'

export type Sensor = {
	id: string
	sensor: string
	sector: string
	area: string
	sensor_types: Array<SensorType>
}
