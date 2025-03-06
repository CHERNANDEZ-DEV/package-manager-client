'use client';
import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);



dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

type LabelRender = SelectProps['labelRender'];

const options = [
    { label: 'gold', value: 'gold' },
    { label: 'lime', value: 'lime' },
    { label: 'green', value: 'green' },
    { label: 'cyan', value: 'cyan' },
];

const labelRender: LabelRender = (props) => {
    const { label, value } = props;

    if (label) {
        return value;
    }
    return <span>No option match</span>;
};

const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

const customFormat: DatePickerProps['format'] = (value) =>
    `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;


const App: React.FC = () => (

    <div className='h-full overflow-y-auto'>
        <Steps
            items={[
                {
                    title: 'Información de entrega',
                    status: 'finish',
                    icon: <UserOutlined />,
                },
                {
                    title: 'Agregar paquetes',
                    status: 'process',
                    icon: <LoadingOutlined />,
                },
                {
                    title: 'Done',
                    status: 'wait',
                    icon: <SmileOutlined />,
                },
            ]}
        />

        <div className='flex flex-col p-4 pt-6 gap-12'>

            <div className='flex gap-2'>
                <div className='w-3/4 h-12'>
                    <p>📍 Dirección de recolección</p>
                    <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%', height: '100%' }} options={options} />
                </div>
                <div className='w-1/4 h-12'>
                    <p>📅  Fecha Programada</p>
                    <DatePicker className='w-full h-full' defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='w-1/3'>
                    <p>Nombres</p>
                    <Input className='h-12' placeholder="Carlos Alberto" />
                </div>
                <div className='w-1/3'>
                    <p>Apellidos</p>
                    <Input className='h-12' placeholder="Hernández Guerra" />
                </div>
                <div className='w-1/3'>
                    <p>Correo Electrónico</p>
                    <Input className='h-12' placeholder="tu-email@email.com" />
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='w-1/3'>
                    <p>Teléfono</p>
                    <Input className='h-12' placeholder="Dirección del destinatario" />
                </div>

                <div className='w-2/3'>
                    <p>Dirección del destinatario</p>
                    <Input className='h-12' placeholder="Dirección del destinatario" />
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='w-1/3'>
                    <p>Departamento</p>
                    <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%', height: '100%' }} options={options} />
                </div>
                <div className='w-1/3'>
                    <p>Municipio</p>
                    <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%', height: '100%' }} options={options} />
                </div>
                <div className='w-1/3'>
                    <p>Punto de Referencia</p>
                    <Input className='h-12' placeholder="Punto de referencia" />
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='w-full'>
                    <p>Indicaciones</p>
                    <Input className='h-12' placeholder="Punto de referencia" />
                </div>
            </div>

            <div className='flex gap-2'>
                <div className='flex justify-end w-full'>
                    <Flex gap="small" wrap>
                        <Button type="primary">Siguiente</Button>
                    </Flex>
                </div>
            </div>
        </div>
    </div>
);

export default App;