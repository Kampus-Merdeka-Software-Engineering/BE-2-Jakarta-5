// const { Access } = require('../models/access');
// const { Activity } = require('../models/activity');
// const { Division } = require('../models/division');
// const { Functionary } = require('../models/functionary');
// const { LetterStatus } = require('../models/letter_status');
// const { RequestLetter } = require('../models/request_letter');
// const { Role } = require('../models/role');

// exports.authenticateDB = async (db) => {
// 	// Associations

// 	// accesseses table
// 	Activity.belongsToMany(Functionary, { through: Access, foreignKey: 'functionary_id' });
// 	Functionary.belongsToMany(Activity, { through: Access, foreignKey: 'activity_id' });

// 	// functionaries table
// 	Role.hasMany(Functionary);
// 	Functionary.belongsTo(Role, { foreignKey: 'role_id' });
// 	Division.hasMany(Functionary);
// 	Functionary.belongsTo(Division, { foreignKey: 'division_id' });

// 	// request_letters table
// 	Activity.hasMany(RequestLetter);
// 	RequestLetter.belongsTo(Activity, { foreignKey: 'activity_id' });
// 	LetterStatus.hasMany(RequestLetter);
// 	RequestLetter.belongsTo(LetterStatus, { foreignKey: 'status_id' });

// 	try {
// 		await db.authenticate();
// 		console.log('Connection has been established successfully.');
// 	} catch (err) {
// 		console.error('Unable to connect to the database:', err);
// 		throw new Error();
// 	}
// };
