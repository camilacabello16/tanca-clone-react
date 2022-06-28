import React, { useEffect, useState } from "react";
import axios from 'axios';
import { EMPLOYEE_GET } from "../../contants/api";
import {
    notification
} from 'antd';

const Employee = () => {
    const [listEmployee, setListEmployee] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(1);
    const [sortBy, setSortBy] = useState('CreatedDate');
    const [orderBy, setOrderBy] = useState('desc');
    const [status, setStatus] = useState(0);

    const getListEmployee = () => {
        axios.post(EMPLOYEE_GET, {
            pageSize: pageSize,
            pageIndex: pageIndex,
            sortBy: sortBy,
            orderBy: orderBy,
            status: status
        }).then(res => {
            if (res.data.statusCode == 1) {
                setListEmployee(res.data.data);
            } else {
                openNotificationWithIcon('error', 'Hệ thống', res.data.errorMessage);
            }
        })
    }

    const openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    useEffect(() => {
        getListEmployee();
    }, []);

    return (
        <React.Fragment>

        </React.Fragment>
    );
}

export default Employee;