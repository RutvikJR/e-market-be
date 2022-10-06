var currency = require('./model')

exports.create = async (req, res) => {
	try {
		currency.create({
			name: req.body.name,
			indian_price: req.body.indian_price,
			symbol: req.body.symbol
		}).then(data => {
			res.status(200).json({ success: 1, data: data, message: 'success!' })
		}).catch(function(err) {
			res.status(200).json({ success: 0, message: err })
		});
	} catch (err) {
		res.status(200).json({ success: 0, message: err })
  }
}

exports.index = async (req, res) => {
	try {
		currency.findAll({})
		.then(async data => {
			res.status(200).json({ success: 1, message: 'Results', data: data })
		})
	} catch (error) {
	  res.status(200).json({ success: 0, message: 'error!' })
	}
}

exports.getById = async (req, res) => {
	try {
		var whereClause = {
			id: req.body.id,
		}
  
		currency.findOne({
		  where: whereClause,
		})
		.then(async data => {
			data = (data)?data.toJSON():{}
			res.status(200).json({ success: 1, message: 'details found!', data: data})
		})
	} catch (error) {
		res.status(200).json({ success: 0, message: 'error!' })
	}
}

exports.update = async (req, res) => {
	try {
		currency.update(
			{
				name: req.body.name,
				indian_price: req.body.indian_price,
				symbol: req.body.symbol
			},
			{
			  returning: true,
			  where: {
				  id: req.body.id
			  }
			}
		).then(function () {
			currency.findOne(
				{ where: { id: req.body.id } }
			).then(data => {
				if (data) {
					res.status(200).json({ success: 1, data: data, message: 'Updated successfully' })
				} else {
					res.status(200).json({ success: 0, message: 'No Results Found' })
				}
			})
		})
	} catch (error) {
	  res.status(200).json({ success: 0, message: 'Error while updating data.' })
	}
}

exports.remove = async (req, res) => {
	try {
		currency.destroy({ 
			where: { id: req.body.id }
		}).then(function () {
			res.status(200).json({
			  success: 1,
			  message: 'Removed successfully.'
			})
		})
	} catch (error) {
		res.status(200).json({
			success: 0,
			message: 'Error while removing data.'
		})
	}
}