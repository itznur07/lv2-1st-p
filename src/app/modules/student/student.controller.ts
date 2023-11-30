import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

const getStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsToDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'students data get successfully!',
    data: result,
  });
});

const getStudent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await StudentServices.getSingleStudentToDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'signle student get successfully!',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const studentId = req.params.id;
  const result = await StudentServices.deletedSingleStudentToDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully!',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const updaterId = req.params.id;
  const result = await StudentServices.changeStatusToDB(updaterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'status updated successfully!',
    data: result,
  });
});

//---------------Exproter----------!>
export const StudentControllers = {
  getStudents,
  getStudent,
  deleteStudent,
  changeStatus,
};
